const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require('morgan');

// Create our Express app for our API Server
const app = express();

// Logger
app.use(morgan('dev'));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


// done! we export it so we can start the site in start.js
module.exports = app;

