var express = require('express');
var router = express.Router();

const heroesController = require("../controllers/heroesController");

/* GET /heroes */
router.get('/', heroesController.list);

/* GET /heroes/id/profesion */
router.get("/:id/profesion", heroesController.profesion);

/* GET /heroes/id/resenia/tipo */
router.get("/:id/resenia/:tipo?", heroesController.resenia);


module.exports = router;