module.exports = {
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.PORT,
  DB_DIALECT: process.env.DB_DIALECT,
  DB_LOGGING: process.env.DB_LOGGING,
  DB_POOL_MAX: process.env.DB_POOL_MAX,
  DB_POOL_MIN: process.env.DB_POOL_MIN,
  DB_CONNECTION_IDLE: process.env.DB_CONNECTION_IDLE,
  PASS_HASH_ROUNDS: process.env.PASS_HASH_ROUNDS,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  ACCESS_TOKEN_ALGO: process.env.ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_ALGO: process.env.REFRESH_TOKEN_ALGO,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
};
