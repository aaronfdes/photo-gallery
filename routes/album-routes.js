var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var album = require('../models/album.js');
var mylog = require('../photo-logger');
var myErrorHandler = require('../error-handler');


/* GET ALL published albums */
router.get('/', function (req, res, next) {
  mylog.logInfo("called", req, res);
  album.aggregate([{ $match: { $and: [{ published: true }, { deletedDate: { $eq: null } }] } }, { $sort: { createdDate: -1 } }, { $project: { name: 1, coverImage: 1, numberOfImages: { $size: "$listImages" } } }]).exec(function (err, albums) {
    if (err) {
      return myErrorHandler.handleError(err,req,res);
    }
    mylog.logInfo("returning", req, res);
    res.json(albums);
  });
});

/* GET individual Album */
router.get('/:album', function (req, res, next) {
  mylog.logInfo("called", req, res);
  album.findOne({ $and: [{ _id: req.params.album }, { published: true }, { deletedDate: { $eq: null } }] }, function (err, albums) {
    if (err) {
      return myErrorHandler.handleError(err,req,res);
    }
    mylog.logInfo("returning", req, res);
    res.json(albums);
  });
});

module.exports = router;