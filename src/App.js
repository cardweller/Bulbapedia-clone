import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"} className="App-logo" alt="logo"/>
                    <h2>poop soup soup</h2>
                </div>
                <Routes/>
            </div>
        );
    }
}

export default App;
