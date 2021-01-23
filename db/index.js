const { Pool } = require('pg');
const config = require('../config');


const pghost = config.pghost;
const pgport = config.pgport;
const pguser = config.pguser;
const pgpassword = config.pgpassword;
const pgdatabase = config.pgdatabase;

console.log("PGHOST=%s", pghost);
console.log("PGPORT=%s", pgport);
console.log("PGUSER=%s", pguser);
console.log("PGPASSWORD=%s", pgpassword);
console.log("PGDATABASE=%s", pgdatabase);

const pool = new Pool({
  host: pghost,
  port: pgport,
  user: pguser,
  password: pgpassword,
  database: pgdatabase,
  ssl: { rejectUnauthorized: false }
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}