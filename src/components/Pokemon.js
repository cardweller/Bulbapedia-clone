import React, {useEffect, useState} from "react";
import {getPokemonById} from "../actions/actions";
import {Link} from "react-router-dom";

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

    return (
        <div>
            <Link to={previousRoute}>Previous</Link>
            <h3>Name: {data.getName()}</h3>
            <img src={data.getImageUrl()} alt={"front"}/>
            <br/>
            <Link to={nextRoute}>Next</Link>
        </div>
    );
}

export default Pokemon;
