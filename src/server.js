const express = require('express');
// Importar la funcion router
const router = require('./network/routes');
const db = require('./db/db');

const URI = 'mongodb://db_user_platzivideos:odas0314@cluster0-shard-00-00.aokru.mongodb.net:27017,cluster0-shard-00-01.aokru.mongodb.net:27017,cluster0-shard-00-02.aokru.mongodb.net:27017/chatnodejs?ssl=true&replicaSet=atlas-x8y95n-shard-0&authSource=admin&retryWrites=true&w=majority';
db(URI);

var app = express();
var port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router(app); // Uso de la funcion principal

app.use('/app',express.static(__dirname + '/public'));


app.listen(port, ()=> { console.log(`Servidor corriendo en el puerto ${port}`); }) 