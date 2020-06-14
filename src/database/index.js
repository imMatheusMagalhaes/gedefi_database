const kenxfile = require('../../knexfile');
const knex = require('knex')(kenxfile.development);

module.exports = knex;