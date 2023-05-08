const express = require("express");
const router = express.Router();
const preguntasController = require('../controllers/preguntas.controller');

router.get("/", preguntasController.get_preguntas);

module.exports = router;