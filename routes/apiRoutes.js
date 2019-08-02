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
};