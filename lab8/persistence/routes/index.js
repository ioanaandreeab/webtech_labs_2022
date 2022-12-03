const router = require("express").Router();
const moviesRouter = require("./movies");
const studiosRouter = require("./studios");

router.use("/movies", moviesRouter);
router.use("/studios", studiosRouter);

module.exports = router;