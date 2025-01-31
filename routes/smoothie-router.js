const express = require("express");
const { getSmoothies } = require("../db/Controllers/smoothieController");

const smoothieRouter = express.Router();

// Route to get all smoothies
smoothieRouter.get("/", getSmoothies);

module.exports = smoothieRouter;
