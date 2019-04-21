const express = require("express");
const Router = express.Router();
const studentReportController = require("../controllers/report");

Router.get("/", studentReportController.getStudentReport);
Router.post("/", studentReportController.postStudentReport);

module.exports = Router;
