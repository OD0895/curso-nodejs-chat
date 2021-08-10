const express = require('express');
// Importar la funcion router
const router = require('./network/routes');

var app = express();
var port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router(app); // Uso de la funcion principal

app.use('/app',express.static(__dirname + '/public'));


app.listen(port, ()=> { console.log(`Servidor corriendo en el puerto ${port}`); }) 