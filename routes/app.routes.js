module.exports = (app) => {
    const appJSON = require('../controllers/app.controllers');
    //Retrieve all videos from all apps
    app.get('/app', appJSON.findAll);

    //Create
    app.post('/app', appJSON.create);
}