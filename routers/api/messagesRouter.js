// "/api/messages"へのアクセス担当

const express = require("express");

const getMessages = require("../../models/messages/get.js");
const createMessage = require("../../models/messages/create.js");

const messagesRouter = express.Router();
messagesRouter.get("/", getMessages);
messagesRouter.post("/", createMessage);

module.exports = messagesRouter;
