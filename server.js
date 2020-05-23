// SERVER
const express = require("express");
const app = express();
const morgan = require("morgan");

// // DB
// const dotenv = require("dotenv");
// dotenv.config();
// const config = require("./knexfile.js").development;
// const knex = require("knex")(config);

// APIのルーティング
app.use("/api", express.json());

const { webhookRouter } = require("./routers/webhookRouter.js");
const { messagesRouter } = require("./routers/apiRouters/messagesRouter.js");
const { usersRouter } = require("./routers/apiRouters/usersRouter.js");
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
