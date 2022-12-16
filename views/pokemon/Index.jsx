const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: 'crimson',
  };
  const bodyStyle = {
    backgroundColor:'cyan',
   }
  const navStyle={
     fontSize:'30px'

  }
  
 class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <body style={bodyStyle}>
      <div style ={myStyle}>
        <nav style={navStyle}>
        <h1 style={{textAlign: 'center',color:'blue',fontSize:'40px'}}>See All The Pokemon!</h1>
          <a href='/pokemon/new'>Create a New Pokemon</a>
        </nav>
       
        <ul style ={{ display: 'inlineBlock',textAlign: 'left'}}>
            {pokemon.map((pokemon)=>{
                return(
                 <li>
                   <a style={{textAlign: 'center',color:'indigo',fontSize:'30px'}} href = {`/pokemon/${pokemon.id}`}>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</a><br/><br/>     
                  <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method="POST">
                  <input style={{width: '80px',backgroundColor:'slateblue'}} type='submit' value='DELETE'/>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                  <a style={{width: '500px',fontSize:'20px'}}href={`/pokemon/${pokemon.id}/edit`}>Edit this Pokemon</a><br/><br/>
                  </form>
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
