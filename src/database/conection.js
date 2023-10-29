const knex = require("knex");
const config = require("../../knexfile.js");

const conection = knex(config.development);

module.exports = conection;