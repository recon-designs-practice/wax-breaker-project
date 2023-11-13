const Pool = require('pg').Pool

const pool = new Pool({
  user: 'waxbreakerdb_i6vt_user',
  password: 'JdbsXgdwZ7vOjLp8i4tC2Uq9xrEySnRp',
  host: 'dpg-cl8ofnf6e7vc73a8enj0-a.oregon-postgres.render.com',
  port: '5432',
  database: 'waxbreakerdb_i6vt'
})

module.exports = pool