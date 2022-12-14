const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };
  const bodyStyle = {
    backgroundColor:'cyan',
   

  }

 class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <body style={bodyStyle}>
      <div style ={myStyle}>
        <nav>
          <a href='/pokemon/new'>Create a New Pokemon</a>
        </nav>
        <h1 style={{textAlign: 'center'}}>See All The Pokemon!</h1>
        <ul>
            {pokemon.map((pokemon)=>{
               console.log("inside map function")
                return(
                 
                <li>The <a href = {`/pokemon/${pokemon.id}`}>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</a>  is   {pokemon.img}.
                </li>
                
                )
            })}
        </ul>
      </div>
      </body>
    )
  }
}

module.exports = Index;