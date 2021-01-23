// config.js
require('dotenv').config();

const env = process.env.NODE_ENV; 

const config = {
    env: env,
    pghost: process.env.PGHOST,
    pgport: process.env.PGPORT,
    pguser: process.env.PGUSER,
    pgpassword: process.env.PGPASSWORD,
    pgdatabase: process.env.PGDATABASE,
};
/*
const config = {
 dev
};
*/
module.exports = config;