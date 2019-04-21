const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

// Connection to mongoDB
mongoose.connect("mongodb://localhost:27017/locofast");

app.use(morgan("combined"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/student", routes);

app.listen("3100", () => {
  console.log("Server started at port 3100");
});
