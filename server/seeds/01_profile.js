/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("profile").del();
  await knex("profile").insert([
    {
      profile_id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@example.com",
      phone_number: "+1 123 456 7890",
      shipping_address: "123 Main St, Anytown, USA",
      billing_address: "123 Main St, Anytown, USA",
    },
  ]);
};
