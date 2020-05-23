const config = require("../../knexfile.js").development;
const knex = require("knex")(config);

const getAllMessgess = (req, res) => {
  knex("messages")
    .select()
    .then((messages) => res.send(messages));
};

module.exports = getAllMessgess;
