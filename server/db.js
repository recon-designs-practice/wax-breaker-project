const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString:
    "postgres://steadyuser:qG8NjFK7K1M52EFZvLZR05unW9nwgODc@dpg-cl99hvuma2hs73c5vqjg-a/waxbreakerdb_jkhr",
  ssl: { rejectUnauthorized: false },
  host: "dpg-cl99hvuma2hs73c5vqjg-a",
  port: "5432",
  user: "steadyuser",
  database: "waxbreakerdb_jkhr",
  password: "qG8NjFK7K1M52EFZvLZR05unW9nwgODc",

  // user: 'postgres',
  // password: '122101',
  // host: 'localhost',
  // port: '5432',
  // database: 'waxbreakerdb'
});

module.exports = pool;
