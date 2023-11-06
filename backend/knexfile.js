
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database:"ieee",
      host: "localhost",
      user: "root",
      password: ""
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/database/migrations'

    }
  }
};
