const express = require("express");
const Router = express.Router();
const studentController = require("../controllers/student");

Router.get("/", studentController.getStudent);
Router.post("/", studentController.postStudent);

module.exports = Router;
