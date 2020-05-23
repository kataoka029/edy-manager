const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use("", require("./routers/rootRouter.js"));
app.use("/api", express.json());
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server running at ${PORT}`);
