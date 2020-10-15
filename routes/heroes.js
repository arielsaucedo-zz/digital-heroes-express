var express = require('express');
var router = express.Router();
const { HTTPVersionNotSupported } = require ("http-errors");
let heroes = require("../data/heroes.json");

/* GET /heroes */
router.get('/', function(req, res, next) {
    res.json(heroes);
});



module.exports = router;