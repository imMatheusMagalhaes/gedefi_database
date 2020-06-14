const knex = require('../database')

module.exports = {
  async Index(req, res) {
    const results = await knex("stores");
    return res.json(results);
  },
};
