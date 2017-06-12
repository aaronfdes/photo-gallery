var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var album = require('../models/album.js');

/* GET ALL published albums */
router.get('/', function (req, res, next) {
  album.find({}, function (err, albums) {
    if (err) return next(err);
    res.json(albums);
  });
});

/* GET individual Album */
router.get('/:album', function (req, res, next) {
  album.findById({ _id: req.params.album }, function (err, albums) {
    if (err) return next(err);
    res.json(albums);
  });
});

/* Delete individual Album */
router.delete('/:album', function (req, res, next) {
  album.findByIdAndRemove({ _id: req.params.album }, function (err, albums) {
    if (err) return next(err);
    res.json(albums);
  });
});

/* Update individual Album */
router.put('/:album', function (req, res, next) {
  /*album.findById({ _id: req.params.album }, function (err, albums) {
    if (err) return next(err);
    res.json(albums);
  });*/
});



/* SAVE album */
router.post('/', function (req, res, next) {
  album.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;