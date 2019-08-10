var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

        app.get("/api/todos", function (req, res) {
            db.Journal.findAll({}).then(function (dbJournal) {
                res.json(dbJournal);
            });

        });
        app.post("/api/todos", function (req, res) {
            db.Journal.create({
                text: req.body.text,
                complete: req.body.complete
            }).then(function (dbJournal) {
                res.json(dbJournal);
            });

    });
    app.post("/api/todos", function (req, res) {
        db.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function (db) {
            res.json(db);
        });

        app.delete("/api/journals/:id", function (req, res) {
            db.Journal.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(function (dbJournal) {
                    res.json(dbJournal);
                });

    app.delete("/api/journals/:id", function (req, res) {
        db.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (db) {
                res.json(db);
            });

        app.put("/api/journals", function (req, res) {
            db.Journal.update({
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

    app.put("/api/journals", function (req, res) {
        db.update({
                text: req.body.text,
                complete: req.body.complete
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (db) {
                res.json(db);
            });
    });

    // Using the passport.authenticate middleware with our local strategy.  If the user has valid login credentials, send them to the members page, otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request, so we're sending the user back the routhe to the members page because the redirect will happen on the front end. They won't get this or even be able to access this page if they aren't authed
        res.redirect("/members");
    });

    // Route for siging up a user. The user's password is automatically hashed and stored securely thanks to how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in, otherwise send back an error
    app.post("/api/signup", (req, res) => {
        let {
            fName,
            lname,
            email,
            password,
            password2
        } = req.body;
        console.log(req.body.fName);
        console.log(req.body.lname);
        console.log(req.body.email);
        console.log(req.body.password);
        console.log(req.body.password2);
        let errors = [];
        if (!fName || !lname || !email || !password || !password2) {
            errors.push({
                message: "Please fill in all fields"
            });
        }
        if (password !== password2) {
            errors.push({
                message: "Passwords do not match"
            });
        }
        if (password.length < 6) {
            errors.push({
                message: "Password needs to be at least 6 characters long"
            });
        }
        if (errors.length > 0) {
            console.log(errors);
            res.render("signup", {
                errors,
                fName,
                lname,
                email,
                password,
                password2
            });
        } else {
            db.User.create({
                email: req.body.email,
                password: req.body.password,
                fName: req.body.fName,
                lname: req.body.lname
            }).then(function (dbUser) {
                console.log(dbUser);
                // redirect
                req.flash("success_message", "You are now signed up and can log in");
                res.redirect("/login");
            }).catch(function (err) {
                console.log(err);
                res.render("signup");
            });
        }
    });
    // db.User.create({
    //     email: req.body.email,
    //     password: req.body.password
    // }).then(function () {
    //     res.redirect(307, "/api/login");
    // }).catch(function (err) {
    //     console.log(err);
    //     res.render("signup");
    // });
    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
        // window.location = "/";
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Other wise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    app.get("/members", function (req, res) {
        db.User.findOne({
            where: {
                id: req.user.id
            },
            include: [db.Journals, db.Todays, db.Weeks, db.Months]
        })
            .then(function (membersPage) {
                console.log(membersPage, "MEMBERS PAGE")
                var hbsObject = {
                    journal: membersPage.journal,
                    todo: dbTodo
                };
                return res.render("index", hbsObject)
            })
    })

};