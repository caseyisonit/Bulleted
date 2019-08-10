var express = require("express");
var path = require("path");
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");



module.exports = function(app) {

    app.get("/", function(req, res) {
        if (req.user) {
            res.render("index", {loggedIn: true, loggedOut:false});
        } else {
            res.render("index", {loggedIn: false, loggedOut:true});
        }
      });

    app.get("/signup", function(req, res) {
        // If the user already has an account send them to the memebers page
        if (req.user) {
            res.redirect("/members");
        } else {
        res.render("signup");
        }
    });

    app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        } else {
            if (req.query.user) {
                res.render("login", {message: "You are successfully signed up! Please log in to continue"});
            }else {

                 res.render("login");
            }
    }
    });

    // Here we've added our isAuthenticated middleware to this route. If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function(req, res) {
        if (req.user) {
            res.render("dashboard", {loggedIn: true, loggedOut:false});
        } else {
            res.render("index", {loggedIn: false, loggedOut:true});
        }
    });

    app.get("/user", function(req, res) {
        res.render("dashboard");
    });

};
