var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mylog = require('../photo-logger');

/* login */
router.post('/', function (req, res, next) {
  mylog.logInfo("called", req, res);
  //todo change these based on login requirements
  if (req.body.username == 'a' && req.body.password == 'a') {
    mylog.logInfo("Login Success", req, res);
    var token = jwt.sign({ username: req.body.username }, 'photo-blog-secret', { expiresIn: 60 * 60 });
    res.json({
      success: true,
      token: token
    });
  } else {
    mylog.logInfo("Login Failure", req, res);
    res.json({
      success: false
    });
  }

});


module.exports = router;