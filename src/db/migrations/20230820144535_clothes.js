/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable( 'clothes', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.string('img_url');
    table.string('description');
    table.string('category');
    table.string('type')

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('clothes');
