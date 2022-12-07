const router = require("express").Router();
const moviesRouter = require("./movies");
const studiosRouter = require("./studios");
const actorsRouter = require("./actors");

router.use("/movies", moviesRouter);
router.use("/studios", studiosRouter);
router.use("/actors", actorsRouter);

module.exports = router;