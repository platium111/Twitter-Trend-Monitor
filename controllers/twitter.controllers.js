const App = require('../models/twitter.models.js');
const mongoose = require('mongoose');

var Twitter = require('../libs/Twitter').Twitter;

const config = {
    "consumerKey": "VbGdE51tbP0yAlyfSI03wXZYL",
    "consumerSecret": "rqA9iHEjwgLWbhHqHpN84Eo60wAPnaatZE1wgW8vpDRDqLkqG9",
    "accessToken": "788571026821042176-Hsm6uLp2u1QEHSQk4dyRQVfhfyA3KK8",
    "accessTokenSecret": "S10h7gpFhZUaPQDFngqgS9L3ZxbCml5d8fMaIVGVtQlMH",
    "callBackUrl": "XXX"
};

var twitter = new Twitter(config);
// Retrieve and return all notes from the database.

exports.getTrends = (req, res) => {
    //Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving following."
        });
    };
    var success = function (data) {
        const parseData = JSON.parse(data);
        const users = parseData.users;
        const tu = users[0];
        let followingData = [];
        users.forEach(user => {
            var data = {};
            data.fullName = user.name;
            data.accountName = '@' + user.screen_name;
            data.image_url = user.profile_image_url;
            followingData = [...followingData, data];
        });
        // res.send(followingData);
        // console.log(followingData);
    };

    var successHomeTimeLine = (data) => {
        const parseData = JSON.parse(data);
        console.log(parseData);
    }

    var errorHomeTimeLine = function (err, response, body) {
        console.log('ERROR [%s]', err);
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving following."
        });
    };

    twitter.getFriendsList({ count: '1' }, error, success);
    twitter.getHomeTimeline({ count: '4' }, errorHomeTimeLine, successHomeTimeLine);

};
