import {capitalizeTitle} from "../util";

const basePokemonUrl = 'https://pokeapi.co/api/v2';
// https://pokeapi.co/

function objectToQueryParams(params) {
    if (!params) {
        return "";
    }

    const queryStr = Object.keys(params)
        .filter(key => String(params[key]) !== "")
        .map(key => `${key}=${encodeURIComponent(String(params[key]))}`)
        .join("&");
    if (queryStr.length === 0) {
        return ""
    } else {
        return "?" + queryStr;
    }
}

async function pokemonGET(route, params) {
    const url = basePokemonUrl + route + objectToQueryParams(params);
    return fetch(url, {
        method: "GET"
    }).then(r => r.json())
}

export class Pokemon {
    constructor(data) {
        this.data = data;
    }

    getName() {
        if (!this.data && !this.data.name) {
            return "missing mame";
        }
        return capitalizeTitle(this.data.name);
    }

    getTypes() {
        if (!this.data && !this.data.types) {
            return [];
        }
        return this.data.types;
    }

    getImageUrl() {
        if (!this.data && !this.data.sprites && !this.data.sprites.front_default) {
            return ""
        }
        return this.data.sprites.front_default;
    }

    getHeight() {
        return this.data.height / 10;
    }
}

export function getPokemonByName(name) {
    return pokemonGET(`/pokemon/${name}`)
        .then(data => new Pokemon(data));
}

export function getPokemonById(id) {
    return pokemonGET(`/pokemon/${id}`)
        .then(data => new Pokemon(data));
}
