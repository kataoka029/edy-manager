// SERVER
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// DB
const { client } = require("./db.js");
client.connect();
client.query("SELECT * FROM messages", (err, res) => {
  console.log(err, res.rows);
  client.end();
});

// WEBHOOK
const { webhookRouter } = require("./bot.js");
app.use(morgan("dev"));
app.use("/webhook", webhookRouter);

// ROUTING
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("./index.ejs"));

// START
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server running at ${PORT}`);
