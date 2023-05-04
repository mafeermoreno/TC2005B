const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registro.controller');

router.get('/', registroController.obtenerRegistros);

module.exports = router;
