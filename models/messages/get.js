const config = require("../../knexfile.js").development;
const knex = require("knex")(config);

const getAllMessages = (req, res) => {
  knex("messages")
    .select()
    .then((messages) => res.send(messages))
    .catch((err) => res.status(400).send(err.message));
};

const getMessagesByUser = (req, res) => {
  knex("messages")
    .where({ user_id: req.params.id })
    .select()
    .then((messages) => res.send(messages))
    .catch((err) => res.status(400).send(err.message));
};

module.exports = { getAllMessages, getMessagesByUser };
