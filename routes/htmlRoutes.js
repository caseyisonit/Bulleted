var express = require("express");
var path = require("path");
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Import the model (cat.js) to use its database functions.
// var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.


// Requiring our custom middleware for checking if a user is logged in


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
      });

    app.get("/signup", function(req, res) {
        // If the user already has an account send them to the memebers page
        if (req.user) {
            res.redirect("/members");
        }
        res.render("signup");
    });

    app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.render("login");
    });

    // Here we've added our isAuthenticated middleware to this route. If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function(req, res) {
        res.render("dashboard");
    });
};
