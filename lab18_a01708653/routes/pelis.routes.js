const express = require('express');

const router = express.Router();

const pelisController = require('../controllers/peliculas.controller');

router.get('/nueva', pelisController.get_nueva);

router.post('/nueva', pelisController.post_nueva);

router.get('/: id', pelisController.catalogar);

router.get('/', pelisController.catalogar);

module.exports = router;