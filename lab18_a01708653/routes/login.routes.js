const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/ingresar', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

module.exports = router;