
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database:"IEEE",
      user: "root",
      password: ""
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/core/database/migrations'

    }
  }
};
