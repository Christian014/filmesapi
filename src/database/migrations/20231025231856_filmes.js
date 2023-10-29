
exports.up = function(knex) {
  return knex.schema.createTable("filmes", function(table){
    table.increments("id");
    table.string("nomeFilme").notNulLable;

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
