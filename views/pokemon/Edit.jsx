const React = require('react');

class Edit extends React.Component{
    render(){
      const pokemon = this.props.pokemon;
      return(
        <body style={{backgroundColor:'teal'}}>
            <div>
            <h1 style={{textAlign: 'center',color:'darkblue',fontSize:'40px'}}>Edit A Pokemon</h1>
            <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
            Name:    <input type='text' name='name' defaultValue={pokemon.name}/><br/><br/>
            Image URL:   <input type='text' name='img' defaultValue={pokemon.img}/><br/><br/>
            <input type='submit' name="" value="Edit The Pokemon"/>
            </form>
        </div>
        </body>
      )  
    }
}
 module.exports = Edit;