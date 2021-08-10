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
    controller.addMessage(user, message)
    .then(() => {
        response.success(req, res, 201);
    })
    .catch(err => {
        response.error(req, res, 500, err);
    });
});

module.exports = router;