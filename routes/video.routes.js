module.exports = (app) => {
    const video = require('../controllers/video.controllers');
    //Retrieve all videos from all apps
    app.get('/homepage', video.findAll);
}