"use strict";

/*
 * This file exports the app that is used by the server to expose the routes.
 * And make the routes visible.
 */

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// Express App
const app = express();

// Use default logger for now
app.use(logger("dev"));
app.use(cors());

// This is to check if the service is online or not
app.use("/ping", function(req, res) {
  res.json({ reply: "pong" });
  res.end();
});

// Export the express app instance
module.exports = app;
