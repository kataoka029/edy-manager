const express = require("express");
const line = require("@line/bot-sdk");
const dotenv = require("dotenv");

dotenv.config();
const config = {
  channelSecret: process.env.SECRET_KEY,
  channelAccessToken: process.env.ACCESS_TOKEN,
};
const client = new line.Client(config);

const handleEvent = async (event) => {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: event.message.text,
  });
};

const webhookRouter = express.Router();
webhookRouter.post("/", line.middleware(config), (req, res) => {
  console.log(req.body.source); // can see by "heroku logs --tail"
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

module.exports = { webhookRouter };
