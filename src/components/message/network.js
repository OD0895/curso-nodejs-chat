const express = require("express");
const router = express.Router();

const response = require("../../network/response");
const controller = require("./controller");

router.get("/", function (req, res) {
  const filterMessages = req.query.user || null;

  controller.getMessages(filterMessages)
  .then((messageList) => {
    response.success(req, res, 200, messageList);
  })
  .catch((err) => {
    response.error(req, res, 500, err);
  });
});

router.post("/", function (req, res) {
  const { user, message } = req.body;
  controller
    .addMessage(user, message)
    .then((fullMessage) => {
      response.success(req, res, 201, fullMessage);
    })
    .catch((err) => {
      response.error(req, res, 500, err);
    });
});

router.patch("/:id", function (req, res) {
  const { id } = req.params;
  const { message } = req.body;
  controller.updateMessage(id, message).
    then((data) => {
      response.success(req, res, 200, data);
    })
    .catch((err) => {
      response.error(req, res, 500, err);
    });
});

router.delete("/:id", function (req, res) {
  const { id } = req.params;
  controller.deleteMessage(id)
    .then((data) => {
      response.success(req, res, 200, `Message ${id} eliminado`);
    })
    .catch((err) => {
      response.error(req, res, 500, err);
    });
});
module.exports = router;
