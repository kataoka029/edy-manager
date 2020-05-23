const express = require("express");
const { handleEvent, lineMiddleware } = require("../bot.js");
const fetch = require("node-fetch");

const webhookRouter = express.Router();
webhookRouter.post("/", lineMiddleware, (req, res) => {
  const newMessage = req.body.events;

  // messagesテーブルにインサート
  fetch("https://8fc349aa.ngrok.io/api/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newMessage),
  });

  // 相手のLINEに返事
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

module.exports = { webhookRouter };
