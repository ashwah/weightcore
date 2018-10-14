'use strict';

const env = {
  PORT: process.env.PORT || 3000,
  DATABASE_NAME: process.env.DATABASE_NAME || 'weightcore_db',
  DATABASE_HOST: process.env.DATABASE_HOST || 'mysql',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'password',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;
