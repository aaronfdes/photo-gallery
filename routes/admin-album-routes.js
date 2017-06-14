var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var album = require('../models/album.js');

/* GET ALL published albums */
router.get('/', function (req, res, next) {
  album.aggregate([{ $match: { $and: [ { deletedDate: { $eq: null } }] } }, { $sort: { createdDate: -1 } }, { $project: { name: 1, coverImage: 1, numberOfImages: { $size: "$listImages" } } }]).exec(function (err, albums) {
    if (err) return next(err);
    res.json(albums);
  });
});

/* GET individual Album */
router.get('/:album', function (req, res, next) {
  album.findOne({ $and: [{ _id: req.params.album }, { deletedDate: { $eq: null } }] }, function (err, albums) {
    if (err) return next(err);
    res.json(albums);
  });
});

/* Delete individual Album */
router.delete('/:album', function (req, res, next) {
  album.findById({ _id: req.params.album }, function (err, albums) {
    if (err) return next(err);
    albums.deletedDate = new Date();
    album.findByIdAndUpdate(albums._id, albums, function (err, album) {
      if (err) return next(err);
      res.json(album);
    });
  });
});

/* Update individual Album */
router.put('/', function (req, res, next) {
  album.findByIdAndUpdate(req.body._id, req.body, function (err, album) {
    if (err) return next(err);
    res.json(album);
  });
});

/* SAVE album */
router.post('/', function (req, res, next) {
  album.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;