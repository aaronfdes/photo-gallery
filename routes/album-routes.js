var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var album = require('../models/album.js');

/* GET ALL published albums */
router.get('/', function (req, res, next) {
  album.find({ $and: [{ published: true }, { deletedDate: { $eq: null } }] }, function (err, albums) {
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

module.exports = router;