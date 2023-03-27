const express = require('express');

const router = express.Router();

const pelisController = require('../controllers/peliculas.controller');

const hasCreate = require ('../util/has-create');

router.get('/nueva', hasCreate, pelisController.get_nueva);

router.post('/nueva', hasCreate, pelisController.post_nueva);

router.get('/: id', pelisController.catalogar);

router.get('/', pelisController.catalogar);

module.exports = router;