
exports.up = async function(knex) {
    return knex.schema.createTable('events', (table)=> {
        table.increments('id').unique();
        table.string('nome').notNullable();
        table.date('data').notNullable();
        table.time('horario',{precision: 4}).notNullable();
        table.string('imagem').notNullable();
        table.text('descricao').notNullable();
        table.integer('user_id')
            .notNullable()
            .references('user.id')
            .onDelete('CASCADE');
})
};

exports.down = async function(knex) {
    return knex.schema.dropTable('events');
};
