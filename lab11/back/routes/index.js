const router = require("express").Router();
const recipesRouter = require("./recipes");

router.use("/recipes", recipesRouter);

module.exports = router;