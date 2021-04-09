import dotenv from 'dotenv';
// .env.* loading...
dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'dev';

if (NODE_ENV === 'prod') dotenv.config({ path: `${__dirname}/../../.prod.env` });
else if (NODE_ENV === 'dev') dotenv.config({ path: `${__dirname}/../../.dev.env` });
else if (NODE_ENV === 'test') dotenv.config({ path: `${__dirname}/../../.test.env` });

const env = process.env;

export default {
  NODE_ENV: NODE_ENV,
  HOST: env.HOST,
  PORT: Number(env.PORT),
  COOKIE_SECRET: env.COOKIE_SECRET,
};
