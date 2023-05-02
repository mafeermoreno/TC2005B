const express = require('express');
const router = express.Router();
const apodController = require('../controllers/apodController');

router.get('/apod', (req, res) => {
  res.render('apod');
});

router.get('/apod_data', apodController.getAPOD);

module.exports = router;
