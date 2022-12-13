const Movie = require("../models/movie");

const router = require("express").Router();

const {Op} = require("sequelize");
const Actor = require("../models/actor");

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

// get all actors for a given movie
router.get("/:movieId/actors", async(req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.movieId);
        if (movie) {
            const actors = await movie.getActors();
            res.status(200).json({actors: actors});
        } else {
            res.status(404).json({message: "movie not found."});
        }
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

// add an actor to a given movie
router.post("/:movieId/actors/:actorId", async(req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.movieId);
        const actor = await Actor.findByPk(req.params.actorId);
        if (movie && actor) {
            movie.addActor(actor);
            await movie.save();
            res.status(200).json({message: "added actor to movie", actor:actor, movie: movie});
        } else {
            res.status(404).json({message: "movie/actor not found."});
        }
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

// delete an actor from a movie
router.delete("/:movieId/actors/:actorId", async(req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.movieId);
        const actor = await Actor.findByPk(req.params.actorId);
        if (movie && actor) {
            movie.removeActor(actor);
            await movie.save();
            res.status(200).json({message: "deleted actor from movie", actor:actor, movie: movie});
        } else {
            res.status(404).json({message: "movie/actor not found."});
        }
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

module.exports = router;