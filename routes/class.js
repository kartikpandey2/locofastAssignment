const express = require("express");
const Router = express.Router();
const studentClassController = require("../controllers/class");

Router.get("/", studentClassController.getStudentClass);
Router.post("/", studentClassController.postStudentClass);

module.exports = Router;
