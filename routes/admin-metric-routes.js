var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var album = require('../models/album.js');
var mylog = require('../photo-logger');
var myErrorHandler = require('../error-handler');

/* GET most viewed Album */
router.get('/mostViewed', function (req, res, next) {
  mylog.logInfo("called", req, res);
  album.findOne({ $and: [{ published: true }, { deletedDate: { $eq: null } }] }, { name: 1, views: 1 })
    .sort({ views: -1 })
    .limit(1)
    .exec(function (err, albums) {
      if (err) {
        return myErrorHandler.handleError(err, req, res);
      }
      res.json(albums);
    });
});

module.exports = router;