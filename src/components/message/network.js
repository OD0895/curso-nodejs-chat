const express = require("express");
const multer = require("multer");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

const upload = multer({ dest: "public/files/" });

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

router.post("/", upload.single('file'), function (req, res) {
  const { chat, user, message } = req.body;
  controller
    .addMessage(chat, user, message, req.file)
    .then((fullMessage) => {
      response.success(req, res, 201, fullMessage);
    })
    .catch((err) => {
      response.error(req, res, 500, err.message);
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
