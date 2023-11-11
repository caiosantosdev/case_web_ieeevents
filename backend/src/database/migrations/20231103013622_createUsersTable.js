
exports.up = async function(knex) {
    return knex.schema.createTable('users', (table)=> {
        table.increments('id').unique();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('telefone').notNullable();
        table.string('cpf').notNullable();
        table.string('endereco').notNullable();
        table.string('email').unique().notNullable();
        table.string('senha').notNullable();
})
};

exports.down = async function(knex) {
    return knex.schema.dropTable('users');
};
