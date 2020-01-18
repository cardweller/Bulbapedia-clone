import React, {useEffect, useState} from "react";
import {getPokemonById} from "../actions/actions";
import {Link} from "react-router-dom";
import {capitalizeTitle} from "../util";

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
        .sort((a,b) => a.slot - b.slot)
        .map(type => <h3>Type {type.slot}: {capitalizeTitle(type.type.name)}</h3> )

    return (
        <div>
            <Link to={previousRoute}>Previous</Link>
            <h3>Name: {data.getName()}</h3>
            {types}
            <img src={data.getImageUrl()} alt={"front"}/>
            <br/>
            <Link to={nextRoute}>Next</Link>
        </div>
    );
}

export default Pokemon;
