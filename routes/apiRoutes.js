var dbJournal = require("../models");

module.exports = function (app) {

    app.get("/api/todos", function (req, res) {
        dbJournal.findAll({}).then(function (dbJournal) {
            res.json(dbJournal);
        });

    });
    app.post("/api/todos", function (req, res) {
        dbJournal.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function (dbJournal) {
            res.json(dbJournal);
        });

    });

    app.delete("/api/journals/:id", function (req, res) {
        dbJournal.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbJournal) {
                res.json(dbJournal);
            });

    });

    app.put("/api/journals", function (req, res) {
        dbJournal.update({
                text: req.body.text,
                complete: req.body.complete
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbJournal) {
                res.json(dbJournal);
            });

    });
    
    // Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.  If the user has valid login credentials, send them to the members page, otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request, so we're sending the user back the routhe to the members page because the redirect will happen on the front end. They won't get this or even be able to access this page if they aren't authed
        res.json("/members");
    });

    // Route for siging up a user. The user's password is automatically hashed and stored securely thanks to how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in, otherwise send back an error
    app.post("/api/signup", function(req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            res.redirect(307, "/api/login");
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side 
    app.get("/api/user_data", function(req, res) {
        if(!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        }
        else {
            // Other wise send back the user's email and id
            // Sendinb back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
};
};