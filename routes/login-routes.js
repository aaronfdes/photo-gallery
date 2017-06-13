var express = require('express');
var router = express.Router();

/* login */
router.post('/', function (req, res, next) {
  //todo change these based on login requirements
  if (req.body.username == 'a' && req.body.password == 'a') {
    res.json(true);
  } else {
    res.json(false);
  }

});


module.exports = router;