const express = require('express');
// Importar la funcion router
const router = require('./network/routes');
const db = require('./db/db');
const { config } = require('./config/index');

const URI = `mongodb://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?ssl=true&replicaSet=atlas-x8y95n-shard-0&authSource=admin&retryWrites=true&w=majority`;
db(URI);

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router(app); // Uso de la funcion principal

app.use('/app',express.static(__dirname + '/public'));


app.listen(config.port, ()=> { console.log(`Servidor corriendo en el puerto ${config.port}`); }) 