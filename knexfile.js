module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database.db',
    },
    useNullAsDefault: true, // Defina useNullAsDefault como true
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  // Outros ambientes podem ser configurados aqui
};



