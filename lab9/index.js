// https://sqlite.org/download.html

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRouter = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", indexRouter);

app.listen(5002, () => {
    console.log('Express web server running on port 5002');
});