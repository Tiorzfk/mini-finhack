var express = require('express');
var utama = require('../controllers/utamaController.js');
var router = express.Router();

/* GET home page. */
router.get('/', utama.index);

module.exports = router;
