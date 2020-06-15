exports.up = (knex) =>
  knex.schema.createTable("stores", function (table) {
    table.increments("id");
    table.text("storename").unique().notNullable();
    table.text("name").notNullable();
    table.text("email").unique().notNullable();
    table.text("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("stores");
