/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("payments").del();
  await knex("payments").insert([
    {
      payment_id: 1,
      profile_id: 1,
      card_type: "Credit",
      payment_type: "Visa",
      full_name: "John Doe",
      card_number: "1234567890123456",
      card_cvv: "1234",
    },
    {
      payment_id: 2,
      profile_id: 1,
      card_type: "Credit",
      payment_type: "Mastercard",
      full_name: "John Doe",
      card_number: "9876543210987654",
      card_cvv: "5678",
    },
    {
      payment_id: 3,
      profile_id: 1,
      card_type: "Credit",
      payment_type: "American Express",
      full_name: "John Doe",
      card_number: "1234567890123456",
      card_cvv: "3456",
    },
    {
      payment_id: 4,
      profile_id: 1,
      card_type: "Credit",
      payment_type: "Apple Card",
      full_name: "John Doe",
      card_number: "1234567890123456",
      card_cvv: "7890",
    },
  ]);
};
