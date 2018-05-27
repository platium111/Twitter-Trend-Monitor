module.exports = (app) => {
    const twitterJSON = require('../controllers/twitter.controllers');
    //Retrieve all videos from all apps
    app.get('/trend', twitterJSON.getTrends);

}