var express = require('express');
var router = express.Router();
var mylog = require('../photo-logger');

/* login */
router.post('/', function (req, res, next) {
  mylog.logInfo("called", req, res);
  //todo change these based on login requirements
  if (req.body.username == 'a' && req.body.password == 'a') {
    mylog.logInfo("Login Success", req, res);
    res.json(true);
  } else {
    mylog.logInfo("Login Failure", req, res);
    res.json(false);
  }

});


module.exports = router;