// LINEの基本的な設定
const line = require("@line/bot-sdk");
const dotenv = require("dotenv");
dotenv.config();
const config = {
  channelSecret: process.env.SECRET_KEY,
  channelAccessToken: process.env.ACCESS_TOKEN,
};
const client = new line.Client(config);

// replyMessgeを返すやつ
const handleReply = (event) => {
  const replyMessage = {
    type: "text",
    text: `REPLY: ${event.message.text}`,
  };
  return replyMessage;
};

// イベント（返答だけ？）を扱う
const handleEvent = async (event) => {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }
  const replyMessage = handleReply(event);
  return client.replyMessage(event.replyToken, replyMessage);
};

// webhookRouter.jsで使う
const lineMiddleware = line.middleware(config);
module.exports = { handleReply, handleEvent, lineMiddleware };
