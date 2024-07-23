const express = require ('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// creamos nuestro servidor
const app = express();

//enlazar la base datos

conectarBD ();
app.use(cors());

app.use(express.json())
app.use('/api/Dia',require ('../routes/rutasDia'));


app.listen (3000,()=>{

    console.log('el servidor esta conectado http://localhost:3000/')
})





/// definir unarutaprincipal

app.get ('/',(req,res) => {
    res.send ("Hola mundo");
})
