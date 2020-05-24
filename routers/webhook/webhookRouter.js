// "/webhook"へのアクセス担当
const express = require("express");
const bot = require("../../bot.js");
// const fetch = require("node-fetch");
// const _ = require("lodash");
// const url = "https://300af617.ngrok.io/";

const webhookRouter = express.Router();
webhookRouter.post("/", bot.lineMiddleware, async (req, res) => {
  // // 相手からのメッセージをテーブルにインサート
  // const events = req.body.events;
  // fetch(`${url}/api/messages`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json; charset=utf-8",
  //   },
  //   body: JSON.stringify(events),
  // });
  // // 相手のLINEに返事
  // await Promise.all(req.body.events.map(bot.handleEvent)).then((result) =>
  //   res.json(result)
  // );
  // EDYからの返事をテーブルにインサート
  // const replyEvents = _.cloneDeep(events);
  // const replyMessage = bot.handleReply(events[0]);
  // replyEvents[0].replyToken = "_";
  // replyEvents[0].source.userId = "Uf42bb47c877c9e5543ca4eda7661e142";
  // replyEvents[0].source.type = "edy";
  // replyEvents[0].message.id = "_";
  // replyEvents[0].message.type = replyMessage.type;
  // replyEvents[0].message.text = replyMessage.text;
  // fetch(`${url}/api/messages`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json; charset=utf-8",
  //   },
  //   body: JSON.stringify(replyEvents),
  // });
  const events = req.body.events;
  bot.insertMessageIntoTable(req, res);
  await bot.createReply(req, res);
  bot.insertReplyIntoTable(req, res);
});

module.exports = webhookRouter;
