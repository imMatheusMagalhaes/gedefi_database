const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("stores");
    return res.json(results);
  },

  async create(req, res, next) {
    try {
      const { storename } = req.body;
      const { name } = req.body;
      const { email } = req.body;
      const { password } = req.body;

      await knex("stores").insert({ storename, name, email, password });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { storename } = req.body;
      const { id } = req.params;

      await knex("stores").update({ storename }).where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await knex("stores").where({ id }).del();
      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
