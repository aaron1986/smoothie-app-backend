const db = require("../../connection"); 

// Fetch all smoothies from the database
exports.selectAllSmoothies = async () => {
  const sqlQuery = "SELECT * FROM smoothies;";
  return db.query(sqlQuery).then(({ rows }) => {
    return rows;
  });
};
