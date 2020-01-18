import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <Link to={"/pokemon/1"} >
            Bulba!
        </Link>
    );
}

export default Home;
