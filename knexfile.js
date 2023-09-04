const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const migrationsDirectory = path.join(__dirname, 'src', 'db', 'migrations');
const migrationsStub = path.join(__dirname, 'migration-stub.js');
const seedsDirectory = path.join(__dirname, 'src', 'db', 'seeds');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST  ,
      port: process.env.PG_PORT ,
      user: process.env.PG_USER  ,
      password: process.env.PG_PASS ,
      database: process.env.PG_DB ,
    },
    migrations: {
      directory: migrationsDirectory,
      stub: migrationsStub,
    },
    seeds: {
      directory: seedsDirectory,
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST ,
      port: process.env.PG_PORT ,
      user: process.env.PG_USER,
      password: process.env.PG_PASS ,
      database: process.env.database ,
    },
  },
  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: migrationsDirectory,
      stub: migrationsStub,
    },
    seeds: {
      directory: seedsDirectory,
    },
  },
};
