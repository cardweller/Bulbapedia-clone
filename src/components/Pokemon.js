import React, {useEffect, useState} from "react";
import {getPokemonById} from "../actions/actions";
import {Link} from "react-router-dom";
import {capitalizeTitle} from "../util";
import {Stats} from "./Stats"

function Type(type) {
    const title = capitalizeTitle(type.type.name);
    const content = `Type ${type.slot}: ${title}`;
    return <h3>{content}</h3>;
}

function Pokemon({pokemonId}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        getPokemonById(pokemonId)
            .then(setData)
    }, [pokemonId]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const previousRoute = `/pokemon/${pokemonId - 1}`;
    const nextRoute = `/pokemon/${pokemonId + 1}`;

    const types = data.getTypes()
        .sort((a, b) => a.slot - b.slot)
        .map(Type)

    return (
        <div>
            <Link to={previousRoute}>Previous</Link>
            <h3>Name: {data.getName()}</h3>
            {types}
            <img src={data.getImageUrl()} alt={"front"}/>
            <br/>
            <Link to={nextRoute}>Next</Link>

            <Stats pokeData={data} />
        </div>
    );
}

export default Pokemon;
