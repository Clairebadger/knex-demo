/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'kibble', description: 'dry, dull bits of food'},
    {id: 2, name: 'meat', description:'raw meats'},
    {id: 3, name: 'grain', description: 'grainy wheat full of nutrients'}
  ]);
};
