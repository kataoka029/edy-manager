// "/api/messages"へのアクセス担当

const express = require("express");

const {
  getAllMessages,
  getMessagesByUser,
} = require("../../models/messages/get.js");
const { createMessage } = require("../../models/messages/create.js");

const messagesRouter = express.Router();
messagesRouter.get("/", getAllMessages);
messagesRouter.get("/:id", getMessagesByUser);
messagesRouter.post("/", createMessage);

module.exports = messagesRouter;
