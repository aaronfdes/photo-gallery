var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var album = require('../models/album.js');

/* GET ALL albums */
router.get('/', function(req, res, next) {
  album.find({ published: true }, function (err, albums) {
    if (err) return next(err);
    res.json(albums);
  });  
});

/* GET individual Album */
router.get('/:album', function(req, res, next) {
  album.findOne({ _id:req.params.album }, function (err, albums) {
    if (err) return next(err);
    res.json(albums);
  });  
});


/* SAVE album */
router.post('/', function(req, res, next) {
  album.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;