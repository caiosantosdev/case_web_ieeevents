
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database:"IEEE",
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
