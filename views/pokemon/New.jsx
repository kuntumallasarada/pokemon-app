const React = require('react');

class New extends React.Component{
    render(){
        return(
            <body style={{backgroundColor:'steelblue'}}>
            <div>
                <h1 style={{textAlign: 'center',color:'darkblue',fontSize:'40px'}}>New Pokemon Page</h1>
                <form action ='/pokemon' method = 'post'>
                    Name:  <input type = 'text' name ='name'/><br/><br/>
                    Image:  <input type = 'text' name='img' /><br/><br/>
                    <input type = 'submit' name="" value="Create A Pokemon"/>
                </form>
            </div>
            </body>
        )
    }
}
module.exports = New;