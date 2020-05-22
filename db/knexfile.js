const dotenv = require("dotenv");
dotenv.config();
const [DB_USER, DB_PASSWORD] = [process.env.DB_USER, process.env.DB_PASSWORD];
console.log(DB_USER, DB_PASSWORD);

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "dbniuolm51dam7",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: "ec2-54-175-117-212.compute-1.amazonaws.com",
      port: 5432,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "dbniuolm51dam7",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: "ec2-54-175-117-212.compute-1.amazonaws.com",
      port: 5432,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
  },
};
