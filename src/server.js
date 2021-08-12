const express = require('express');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const socket = require('./socket');

const db = require('./db/db');
const { config } = require('./config/index');
const router = require('./network/routes');

const URI = `mongodb://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?ssl=true&replicaSet=atlas-x8y95n-shard-0&authSource=admin&retryWrites=true&w=majority`;
db(URI);

socket.connect(server);
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router(app); // Uso de la funcion principal

console.log(__dirname);
app.use('/app', express.static('./../public'));


server.listen(config.port, ()=> { console.log(`Servidor corriendo en el puerto ${config.port}`); }) 