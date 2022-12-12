const React = require('react');
const pokemon = require('../models/pokemon');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

 class Index extends React.Component {
  render() {
    return (
      <div style ={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
            {pokemon.map((pokemon,id)=>{
                return(
                <li>The <a href = {`/pokemon/${id}`}>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</a>is {pokemon.img}.</li>
                )
            })}
        </ul>
      </div>
    )
  }
}

module.exports = Index;