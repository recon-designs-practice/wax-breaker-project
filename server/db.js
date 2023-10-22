const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: '122101',
  host: 'localhost',
  port: '5432',
  database: 'waxbreakerdb'
})

module.exports = pool