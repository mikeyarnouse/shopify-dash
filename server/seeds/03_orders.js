/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("orders").del();
  await knex("orders").insert([
    {
      item_name: "iPhone 13 Pro",
      item_quantity: "2",
      order_total: "2000",
      shipping_address: "123 Main St, Anytown, USA",
      billing_address: "123 Main St, Anytown, USA",
      profile_id: 1,
      payment_id: 1,
    },
    {
      item_name: "Samsung Galaxy S22 Ultra",
      item_quantity: "1",
      order_total: "1500",
      shipping_address: "123 Main St, Anytown, USA",
      billing_address: "123 Main St, Anytown, USA",
      profile_id: 1,
      payment_id: 2,
    },
    {
      item_name: 'MacBook Pro 16"',
      item_quantity: "3",
      order_total: "4500",
      shipping_address: "123 Main St, Anytown, USA",
      billing_address: "123 Main St, Anytown, USA",
      profile_id: 1,
      payment_id: 3,
    },
    {
      item_name: "Sony PlayStation 5",
      item_quantity: "1",
      order_total: "500",
      shipping_address: "123 Main St, Anytown, USA",
      billing_address: "123 Main St, Anytown, USA",
      profile_id: 1,
      payment_id: 4,
    },
  ]);
};
