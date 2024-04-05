/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("payments", (table) => {
    table.increments("payment_id").primary();
    table
      .integer("profile_id")
      .unsigned()
      .references("profile.profile_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("card_type").notNullable();
    table.string("payment_type").notNullable();
    table.string("full_name").notNullable();
    table.string("card_number").notNullable();
    table.string("card_cvv").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("payments");
};
