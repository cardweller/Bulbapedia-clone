import React from "react";
import {Route, BrowserRouter, Switch, useParams} from "react-router-dom";

import Pokemon from "./components/Pokemon";
import Home from "./components/Home";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pokemon/:id">
                    <PokemonRoute />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}


function PokemonRoute() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {id} = useParams();
    return <Pokemon pokemonId={Number(id)}/>;
}
