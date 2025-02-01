const { Pool } = require("pg");
require("dotenv").config();

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
});

module.exports = pool;
