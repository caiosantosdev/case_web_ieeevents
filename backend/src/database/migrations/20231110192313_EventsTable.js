
exports.up = async function(knex) {
    return knex.schema.createTable('events', (table)=> {
        table.increments('id_evento').unique();
        table.string('nome').notNullable();
        table.string('local').notNullable();
        table.string('endereco').notNullable();
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
