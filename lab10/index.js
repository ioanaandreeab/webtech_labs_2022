// https://sqlite.org/download.html

// init express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

// init sequelize
const sequelize = require('./sequelize');

// import created models
const Movie = require("./models/movie");
const Studio = require("./models/studio");
const Actor = require("./models/actor");

// establish relationship between models
// one-to-many
Studio.hasMany(Movie);
// many-to-many
Actor.belongsToMany(Movie, {through: "actors_movies"});
Movie.belongsToMany(Actor, {through: "actors_movies"});

// start express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", indexRouter);

app.listen(5002, async() => {
    console.log('Express web server running on port 5002');
    try {
        await sequelize.authenticate();
        console.log("established connection w/ db")
    } catch (err) {
        console.error(err);
    }
});