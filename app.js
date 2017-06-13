var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var album = require('./routes/album-routes');
var adminAlbum = require('./routes/admin-album-routes');
var app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/photo-gallery')
    .then(() => console.log('connection to mongodb successful'))
    .catch((err) => console.error(err));

/* CORS- Enable for local */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/album', album);
app.use('/api/admin/album', adminAlbum);

module.exports = app;
