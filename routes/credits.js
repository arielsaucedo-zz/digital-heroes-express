var express = require('express');
var router = express.Router();

const creditsController = require("../controllers/creditsController.js")

/* GET /creditos */
router.get('/', creditsController.credits);

module.exports = router;
