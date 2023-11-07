
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database:"ieee",
      host: "localhost",
      user: "root",
      password: "ieeevents"
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/database/migrations'

    }
  }
};
