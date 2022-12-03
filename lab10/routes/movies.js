const Movie = require("../models/movie");

const router = require("express").Router();

const {Op} = require("sequelize");

// same endpoints as last lab
router.get("/", async(req, res) => {
    try {
        const {minYear, simplified} = req.query;
        // const movies = await Movie.findAll({
        //     where: minYear ? { year : {[Op.gt]: minYear}} : undefined
        // });
        // sql projection
        // const movies = await Movie.findAll({
        //     attributes: ['title', 'genre']
        // });

        // simplified response
        const movies = await Movie.findAll({
            attributes: simplified ? {exclude: 'id'} : undefined
        })
        res.status(200).json({movies: movies});
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

router.get("/:movieId", async(req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.movieId);
        if (movie) {
            res.status(200).json({movie: movie});
        } else {
            res.status(404).json({message: "movie not found."});
        }
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

module.exports = router;