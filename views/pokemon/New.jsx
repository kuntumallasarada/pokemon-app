const React = require('react');

class New extends React.Component{
    render(){
        return(
            <div>
                <h1>New Pokemon Page</h1>
                <form action ='/pokemon' method = 'post'>
                    Name:<input type = 'text' name ='name'/><br/>
                    Image:<input type = 'text' name='img' src='img'/><br/><br/>
                    <input type = 'submit' name="" value="Create A Pokemon"/>
                </form>
            </div>
        )
    }
}
module.exports = New;