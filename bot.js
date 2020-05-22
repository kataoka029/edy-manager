// LINEの基本的な設定
const line = require("@line/bot-sdk");
const dotenv = require("dotenv");
dotenv.config();
const config = {
  channelSecret: process.env.SECRET_KEY,
  channelAccessToken: process.env.ACCESS_TOKEN,
};
const client = new line.Client(config);

// ボット
const handleEvent = async (event) => {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }
  console.log(event);
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: event.message.text,
  });
};

// webhookRouter.jsで使う
const lineMiddleware = line.middleware(config);
module.exports = { handleEvent, lineMiddleware };
