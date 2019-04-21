const express = require("express");
const Router = express.Router();
const studentRoutes = require("./student");
const classRoutes = require("./class");
const reportRoutes = require("./report");

Router.use("/", studentRoutes);
Router.use("/class", classRoutes);
Router.use("/report", reportRoutes);

module.exports = Router;
