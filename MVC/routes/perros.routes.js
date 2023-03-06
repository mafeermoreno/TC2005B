const express = require('express');

const router = express.Router();

const perrosController = require('../controllers/perros.controller');

router.get('/', perrosController.listar);

module.exports = router;