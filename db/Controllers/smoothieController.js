const { selectAllSmoothies } = require("../Models/smoothieModel");

// Controller to get all smoothies
exports.getSmoothies = async (req, res, next) => {
  try {
    const smoothies = await selectAllSmoothies();
    res.status(200).send({ smoothies });
  } catch (err) {
    next(err);
  }
};