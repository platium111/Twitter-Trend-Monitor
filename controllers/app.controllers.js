const App = require('../models/app.models.js');
const mongoose = require('mongoose');
const convertType = require('../libs/convertType');
// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    App.find()
        .then(apps => {
            res.send(apps);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

//Create
// Create and Save a new Note

exports.create = (req, res) => {
    if (!req.body.app_name) {
        return res.status(400).send({
            message: "App name can not be empty"
        });
    }

    // Create a App
    const app = new App({
        app_name: req.body.app_name || "Untitled name",
        image_url: req.body.image_url,
        created_at: req.body.created_at,
        tags: convertType.convertStringToObjIDArr(req.body.tags)
    });

    // Save Note in the database
    app.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};