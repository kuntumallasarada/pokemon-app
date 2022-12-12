import React from 'react';
import pokemon from '../models/pokemon';
class Show extends React.Component{
    render(){
        const pokemon= this.props.pokemon;
        return(
<div>
    <h1>Gotta Catch 'Em All</h1>
    <h2>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h2>
    <img src = {pokemon.img}/>
    <a href = '/pokemon'>Pokemon Home Page</a>
</div>
        )
    }
}

module.exports = Show;