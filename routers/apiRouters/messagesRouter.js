const express = require("express");
const getAllmMesssages = require("../../models/messages/get.js");

const messagesRouter = express.Router();
messagesRouter.get("/", getAllmMesssages);

module.exports = { messagesRouter };
