const Movie = require("../models/movie");
const Studio = require("../models/studio");

const router = require("express").Router();

router.get("/", async(req, res) => {
    try {
        const studios = await Studio.findAll();
        res.status(200).json({studios: studios});
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

router.post("/", async(req, res) => {
    try {
        const newStudio = await Studio.create(req.body);
        res.status(200).json({studio: newStudio});
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

// add a movie to a studio
router.post("/:studioId/movies", async(req, res) => {
    try {
        const studio = await Studio.findByPk(req.params.studioId);
        if (studio) {
            const movie = new Movie(req.body);
            movie.studioId = studio.id;
            await movie.save();
            res.status(201).json({message:"movie added to the studio"});
        } else {
            res.status(404).json({message: "studio not found"})
        }
    } catch(err) {
        res.status(500).json({message: "server error", err: err})
    }
});

// get all movies for a studio
router.get("/:studioId/movies", async(req, res) => {
    try {
        const studio = await Studio.findByPk(req.params.studioId, {
            include: [Movie]
        });
        console.log(studio);
        if (studio) {
            res.status(200).json({movies: studio.movies})
        } else {
            res.status(404).json({message:"studio not found."})
        }
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
})

module.exports = router;