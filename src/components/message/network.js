const express = require('express')
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header":"myheader"
    });
    response.success(req, res, 'Lista de mensajes')
});

router.post('/', function (req, res) {
    const { user, message } = req.body; 
    controller.addMessage(user, message);
    
    res.send('hola')
});

module.exports = router;