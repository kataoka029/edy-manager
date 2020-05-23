// "/webhook"へのアクセス担当
const express = require("express");
const { handleReply, handleEvent, lineMiddleware } = require("../../bot.js");
const fetch = require("node-fetch");
const _ = require("lodash");
const url = "https://84b52281.ngrok.io";

const webhookRouter = express.Router();
webhookRouter.post("/", lineMiddleware, async (req, res) => {
  // 相手からのメッセージをテーブルにインサート
  const events = req.body.events;
  fetch(`${url}/api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(events),
  });

  // 相手のLINEに返事
  await Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );

  // EDYからの返事をテーブルにインサート
  const replyEvents = _.cloneDeep(events);
  const replyMessage = handleReply(events[0]);
  replyEvents[0].replyToken = "_";
  replyEvents[0].source.userId = "_";
  replyEvents[0].source.type = "edy";
  replyEvents[0].message.id = "_";
  replyEvents[0].message.type = replyMessage.type;
  replyEvents[0].message.text = replyMessage.text;
  fetch(`${url}/api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(replyEvents),
  });
});

module.exports = webhookRouter;
