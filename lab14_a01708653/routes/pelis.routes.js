const express = require('express');

const router = express.Router();

const pelisController = require('../controllers/pelis.controller');

router.get('/nueva', pelisController.get_nueva);

router.post('/nueva', pelisController.post_nueva);

router.get('/', pelisController.catalogar);

module.exports = router;