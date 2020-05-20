// BASIC SETTING
const express = require("express");
const { webhookRouter } = require("./bot.js");
const morgan = require("morgan");
const { Client } = require("pg");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

// DB
const client = new Client({
  database: "dbniuolm51dam7",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "ec2-54-175-117-212.compute-1.amazonaws.com",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});
client.connect();
client.query("SELECT * FROM messages", (err, res) => {
  console.log(err, res);
  client.end();
});

// WEBHOOK
app.use(morgan("dev"));
app.use("/webhook", webhookRouter);

// DISPLAY
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("./index.ejs"));

app.listen(PORT);
console.log(`Server running at ${PORT}`);
