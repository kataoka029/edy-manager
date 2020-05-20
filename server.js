const express = require("express");
const { webhookRouter } = require("./bot.js");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use("/webhook", webhookRouter);

app.get("/", (req, res) => res.send("Hello LINE BOT!!"));

app.listen(PORT);
console.log(`Server running at ${PORT}`);
