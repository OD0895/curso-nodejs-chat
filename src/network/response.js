'use strict';

const responseMessages = require('./responseMessages');

exports.success = function(req, res, status, message) {
  res.status(status).send({
    'error': '',
    'body': message? message : responseMessages(status),
  });
};

exports.error = function(req, res, status, message) {
  res.status(status).send({
    'error': message? message : responseMessages(status),
    'body': '',
  });
};