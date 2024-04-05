/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("order_id").primary();
    table.string("item_name").notNullable();
    table.string("item_quantity").notNullable();
    table.string("order_total").notNullable();
    table.string("shipping_address").notNullable();
    table.string("billing_address").notNullable();
    table
      .integer("profile_id")
      .unsigned()
      .references("profile.profile_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("payment_id")
      .unsigned()
      .references("payments.payment_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
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
  return knex.schema.dropTable("orders");
};
