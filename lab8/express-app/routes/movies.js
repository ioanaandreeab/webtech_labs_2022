const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies");

router.post("/", moviesController.createMovie);
router.get("/:movieId", moviesController.getMovieById);
router.get("/", moviesController.getAllMovies);
router.put("/:movieId", moviesController.updateMovie);
router.delete("/:movieId", moviesController.deleteMovie);

module.exports = router;