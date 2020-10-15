var express = require('express');
var router = express.Router();

/* GET /creditos */
router.get('/', function(req, res, next) {
  res.render('credits');
});

module.exports = router;
