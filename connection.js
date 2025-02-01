const { Pool } = require("pg");

// ✅ Database connection setup
const pool = new Pool({
  user: "root",
  host: "localhost",
  database: "smoothie_db",
  password: "pinkBALLS12",
  port: 5432,
});

module.exports = pool;
