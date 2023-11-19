const Pool = require("pg").Pool;
require('dotenv').config()

const pool = new Pool({
  // user: process.env.LOCAL_DATABASE_USER,
  // password: process.env.LOCAL_DATABASE_PASSWORD,
  // host: process.env.LOCAL_DATABASE_HOST,
  // port: process.env.LOCAL_DATATBASE_PORT,
  // database: process.env.LOCAL_DATABASE_NAME,

  connectionString: process.env.RENDER_DATABASE_CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
  user: process.env.RENDER_DATABASE_USER,
  password: process.env.RENDER_DATABASE_PASSWORD,
  host: process.env.RENDER_DATABASE_HOST,
  port: process.env.RENDER_DATABASE_PORT,
  database: process.env.RENDER_DATABASE_NAME,
});

module.exports = pool;
