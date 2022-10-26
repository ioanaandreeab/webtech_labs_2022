const express = require("express");
const bodyParser = require ("body-parser");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

const songs = [
    {
        id: 1, artist: "Channel Tres", songTitle: "No Limit", duration: 207
    },
    {
        id: 2, artist: "NEIL FRANCES", songTitle: "dancing", duration: 210
    },
    {
        id: 3, artist: "Men I Trust", songTitle: "Show me how", duration: 180
    }
];

router.get("/getAllSongs", (req, res) => {
    res.status(200).json(songs);
});

router.get("/getSong/:id", (req, res) => {
    // const id = req.params.id;
    const {id} = req.params;
    if (id) {
        const song = songs.find(song => song.id.toString() === id.toString());
        if (song) {
            res.status(200).json(song);
        } else {
            res.status(404).json({ err: "Song not found." })
        }
    } else {
        res.status(400).json({ err: "You must specify an id for the query." })
    }
});

// add the endpoints for adding a song and editing an existing song
router.post("/addSong", (req, res) => {

});

router.put("/modifySong/:id", (req, res) => {

})

app.listen(8080);
console.log("App listening on port 8080");