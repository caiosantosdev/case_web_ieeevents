
exports.up = async function(knex) {
    return knex.schema.createTable('users', (table)=> {
        table.increments('id').unique();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('cpf').notNullable();
        table.string('telefone').notNullable();
        table.string('endereco').notNullable();
})
};

exports.down = async function(knex) {
    return knex.schema.dropTable('users');
};
