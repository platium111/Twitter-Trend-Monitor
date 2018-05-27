//HIEP-12/5
//[tut-node rest api] https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
// Configuring the database
const dbConfig = require('./configs/keys');
mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });

require('./routes/note.routes')(app);
require('./routes/video.routes')(app);
require('./routes/app.routes')(app);
require('./routes/trend.routes')(app);
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var swig = require('swig');
var cookieParser = require('cookie-parser');

var routes = require('./routes/index.js');

var port = process.env.PORT || 8080;

// *** view engine *** //
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);


app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.listen(port, function () {
    console.log('Example app listening on port 5000!');
})