/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("orders").del();
  await knex("orders").insert([
    {
      item_name: "Premium roasted coffee",
      item_type: "Medium roast",
      item_quantity: 40,
      item_price: "$20.00",
      order_total: "$800.00",
      shipping_address: "123 Main St, Anytown, USA",
      billing_address: "123 Main St, Anytown, USA",
      delivery_date: "April 24, 2024",
      profile_id: 1,
      payment_id: 1,
    },
    {
      item_name: "Ultimate blend coffee beans",
      item_type: "Dark roast",
      item_quantity: 20,
      item_price: "$10.00",
      order_total: "$200.00",
      shipping_address: "123 Main St, Anytown, USA",
      billing_address: "123 Main St, Anytown, USA",
      delivery_date: "April 24, 2024",
      profile_id: 1,
    },
    {
      item_name: "Blast blend coffee",
      item_type: "French Vanilla",
      item_quantity: 30,
      item_price: "$25.00",
      order_total: "$750.00",
      shipping_address: "123 Main St, Anytown, USA",
      billing_address: "123 Main St, Anytown, USA",
      delivery_date: "April 24, 2024",
      profile_id: 1,
      payment_id: 3,
    },
  ]);
};
