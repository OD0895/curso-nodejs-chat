const express = require("express");
const router = express.Router();

const response = require("../../network/response");
const controller = require("./controller");

router.post("/", (req, res) => {
  const { name } = req.body;
  controller
    .addUser(name)
    .then((data) => {
      response.success(req, res, 201, data);
    })
    .catch((err) => {
      response.error(req, res, 500, err);
    });
});

router.get("/", (req, res) => {
  controller
    .listUsers()
    .then((users) => {
      response.success(req, res, 200, users);
    })
    .catch((err) => {
      response.error(req, res, 500, err);
    });
});

module.exports = router;
