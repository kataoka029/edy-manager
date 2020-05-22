const express = require("express");
const { handleEvent, lineMiddleware } = require("../bot.js");

const webhookRouter = express.Router();
webhookRouter.post("/", lineMiddleware, (req, res) => {
  console.log(req.body.events);
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

module.exports = { webhookRouter };
