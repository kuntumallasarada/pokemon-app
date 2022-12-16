import React from 'react';

class Show extends React.Component{
    render(){
        const pokemon= this.props.pokemon;
        return(
            <body style={{backgroundColor:'aquamarine'}}>
           <div>
    <h1>Gotta Catch 'Em All</h1>
    <h2>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h2>
    <img src = {pokemon.img.concat('.jpg')}/>
    <nav>
    <a style ={{fontSize:'30px'}} href = '/pokemon'>Pokemon Home Page</a>
    </nav>
  
        </div>
        </body>
        )
    }
}

module.exports = Show;