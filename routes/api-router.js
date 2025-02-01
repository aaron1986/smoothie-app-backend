const express = require("express");
const smoothieRouter = require("./smoothie-router");

const apiRouter = express.Router();

// Mount smoothie routes
apiRouter.use("/smoothies", smoothieRouter);

module.exports = apiRouter;
