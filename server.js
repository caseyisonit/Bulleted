// Requiring necessary npm middleware packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
// Import the models folder
var db = require("./models");

// Creating express app and configuring middleware need to read though our public folder
var app = express();
app.use(bodyParser.urlencoded({ extended: false })); // For body parser
app.use(bodyParser.json());
app.use(express.static("public"));

// We need to use sessions to keep trach of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Doing a GET to text if the server is working fine
// app.get("/", function(req, res) {
//     res.send("Welcome to Passport with Sequelize and without HandleBars");
// });

// this will listen to and show all activites on our terminal to let us know what is happening in our app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});