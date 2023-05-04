const express = require('express');
const router = express.Router();
const apodController = require('../controllers/apod.controller');

router.get('/apod', (request, response, next) => {
  res.render('apod');
});

router.get('/apod_data', apodController.getAPOD);

module.exports = router;
