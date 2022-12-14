const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const sequelize = require('./sequelize');
require("./models/recipe");

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