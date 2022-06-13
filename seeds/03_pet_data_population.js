/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Maggie', pet_type_id:1, food_type_id: 2},
    {id: 2, name: 'Mochi', pet_type_id:3, food_type_id: 3},
    {id: 3, name: 'Spike', pet_type_id:2, food_type_id: 1}
  ]);
};
