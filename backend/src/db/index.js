const pg = require("pg");

const client = new pg.Client({
  host: 'localhost',
  name: 'photolabs_development',
  user: 'labber',
  password: 'labber',
  port: 5432,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
