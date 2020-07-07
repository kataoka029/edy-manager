const config = {};

config.url =
  process.env.NODE_ENV === "production"
    ? "https://edy-bot.herokuapp.com/"
    : "http://localhost:4000/";

config.channelAccessToken = process.env.ACCESS_TOKEN;
console.log("TOKEN - ", config.channelAccessToken);

export default config;
