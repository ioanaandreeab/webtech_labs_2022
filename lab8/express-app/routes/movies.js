const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies");

// middleware check if movieId is a number
const checkMovieId = (req, res, next) => {
    if(req.params.movieId && isNaN(req.params.movieId)) {
        res.status(400).json({message: "Movie id should be a number"});
    } else {
        next();
    }
}

router.post("/", moviesController.createMovie);
router.get("/:movieId", checkMovieId, moviesController.getMovieById);
router.get("/", moviesController.getAllMovies);
router.put("/:movieId", moviesController.updateMovie);
router.delete("/:movieId", moviesController.deleteMovie);

// add another route for getting all movies that were launched in a given year
// make sure the entries are sorted alphabetically

module.exports = router;