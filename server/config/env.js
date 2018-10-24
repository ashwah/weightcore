'use strict';

const env = {
  PORT: process.env.PORT || 3000,
  DOC_PORT: process.env.DOC_PORT || 80,
  WS_PORT: process.env.WS_PORT || 8081,
  DATABASE_NAME: process.env.DATABASE_NAME || 'weightcore_db',
  DATABASE_HOST: process.env.DATABASE_HOST || 'mysql',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'weightcore_user',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'weightcore_password',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;
