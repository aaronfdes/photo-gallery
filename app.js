var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var helmet = require('helmet')
var log4js = require("log4js");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var login = require('./routes/login-routes');
var album = require('./routes/album-routes');
var adminAlbum = require('./routes/admin-album-routes');
var jwt = require('jsonwebtoken');
var app = express();
app.use(helmet());

log4js.configure({
    appenders: [
       /* { type: 'console' },*/
        {
            type: 'file', filename: 'logs/app.log',
            "maxLogSize": 20480,
            "backups": 10
        }
    ]
});
var appLog = log4js.getLogger();
appLog.setLevel('DEBUG');

mongoose.Promise = global.Promise;
var options = {
    user: 'photo-user',
    pass: 'photo-user'
}
mongoose.connect('mongodb://localhost/photo-gallery', options)
    .then(() => appLog.info('connection to mongodb successful'))
    .catch((err) => appLog.error(err));


/* CORS- Enable for local */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    if (req.method === "OPTIONS")
        res.sendStatus(200);
    else
        next();
});

// app.use(theHTTPLog);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/login', login);
app.use('/api/album', album);

app.use(function (req, res, next) {

    var token = req.headers['x-access-token'];

    if (token) {

        jwt.verify(token, 'photo-blog-secret', function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});
app.use('/api/admin/album', adminAlbum);

module.exports = app;
