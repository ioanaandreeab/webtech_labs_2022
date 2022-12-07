const Actor = require("../models/actor");

const router = require("express").Router();

// create an actor
router.post("/", async(req, res) => {
    try {
        const newActor = await Actor.create(req.body);
        res.status(200).json({actor: newActor});
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

// get all actors
router.get("/", async(req, res) => {
    try {
        const actors = await Actor.findAll();
        res.status(200).json({actors: actors});
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

// get all movies for an actor
router.get("/:actorId/movies", async(req, res) => {
    try {
        const actor = await Actor.findByPk(req.params.actorId);
        if (actor) {
            const movies = await actor.getMovies();
            res.status(200).json({movies: movies});
        } else {
            res.status(404).json({message: "actor not found."});
        }
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
})

module.exports = router;