const router = require("express").Router();
const moviesRouter = require("./movies");

router.use("/movies", moviesRouter);

module.exports = router;