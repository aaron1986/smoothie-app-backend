const express = require("express");
const db = require("../config/db"); // Ensure the correct database file is imported

const router = express.Router();

router.get("/smoothies", async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM smoothies"); // Check if the table exists
    res.json(result.rows);
  } catch (err) {
    console.error("🔥 ERROR:", err); // Log the error for debugging
    next(err); // Pass error to Express handler
  }
});

  

module.exports = router;
