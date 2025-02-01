const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this is correctly set in Render
  ssl: { rejectUnauthorized: false } // Required for Render-hosted PostgreSQL
});

pool.connect()
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error("❌ Database connection error:", err));

module.exports = pool;
