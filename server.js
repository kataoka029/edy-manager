// SERVER
const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

// DB
const { client } = require("./db/config.js");
client.connect();
client.query("SELECT * FROM messages", (err, res) => {
  console.log(err, res.rows);
  client.end();
});

// APIのルーティング
const { webhookRouter } = require("./routers/webhookRouter.js");
const { messagesRouter } = require("./routers/apiRouters/messagesRouter");
const { usersRouter } = require("./routers/apiRouters/usersRouter");
app.use(morgan("dev"));
app.use("/webhook", webhookRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/users", usersRouter);

// その他ルーティング
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("./index.ejs"));

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server running at ${PORT}`);
