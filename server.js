const  express  = require('express');
const app =express();
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());

const pokemon = require('./models/pokemon.js');

//Routes
app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon',(req,res)=>{
    res.render('Index',{
        pokemon:pokemon
    });
})

app.get('/pokemon/:id',(req,res) => {
    res.send(pokemon[req.params.id]);
})



app.listen(3000,()=>{
    console.log("listening");
})
