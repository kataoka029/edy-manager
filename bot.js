// LINEの基本的な設定
const line = require("@line/bot-sdk");
const dotenv = require("dotenv");
dotenv.config();
const config = {
  channelSecret: process.env.SECRET_KEY,
  channelAccessToken: process.env.ACCESS_TOKEN,
};
const client = new line.Client(config);

const fetch = require("node-fetch");
const _ = require("lodash");
const url = "https://300af617.ngrok.io/";
const bot = {};

// 相手からのメッセージを処理し、DBに追加
bot.insertMessageIntoTable = (req, res) => {
  const events = req.body.events;
  fetch(`${url}/api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(events),
  });
};

// リプライメッセージオブジェクトをつくる
const createReplyMessage = (event) => {
  const replyMessage = {
    type: "text",
    text: `「${event.message.text}」ですね。申し訳ないのですが、言葉の意味がよく分かりません😰なるべく早く担当からご連絡させていただきますので、少々お待ちください🙇‍♀️`,
  };
  return replyMessage;
};

// 相手のLINEに返事
bot.createReply = async (req, res) => {
  const events = req.body.events;
  const handleEvent = (event) => {
    if (event.type !== "message" || event.message.type !== "text") {
      return Promise.resolve(null);
    }
    const replyMessage = createReplyMessage(event);
    return client.replyMessage(event.replyToken, replyMessage);
  };
  await Promise.all(events.map(handleEvent)).then((result) => res.json(result));
};

// こちらからのメッセージを処理し、DBに追加
bot.insertReplyIntoTable = (req, res) => {
  const events = req.body.events;
  const replyEvents = _.cloneDeep(events);
  const replyMessage = createReplyMessage(events[0]);
  replyEvents[0].replyToken = "_";
  replyEvents[0].source.userId = "Uf42bb47c877c9e5543ca4eda7661e142";
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
};

// webhookRouter.jsで使う
bot.lineMiddleware = line.middleware(config);

module.exports = bot;
