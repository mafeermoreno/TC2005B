const express = require('express');

const filesystem =require ('fs');

const router = express.Router();

router.get('/ingresar', (request, response, next) => {
    
    let html = `
        <html>
        <head><meta charset="utf-8"></head><body>
        <h1>¡Rifa para ganarte un auto!</h1>
        <a href="/ingresar/datos">Ver los premios</a>
        <br>
        <a href"../premios/lista">Ver los premios</a>
    `;
    response.send(html);
});

router.get('/lista', (request, response, next) => {
    let html = `
        <html>
        <head><meta charset="utf-8"></head><body>
        <h1>¡Gánate un auto y distintos premios con nosotros!</h1>
        <a href="/ingresar/datos">Ver los premios</a>
        <br>
        <a href"../premios/lista">Ver los premios</a>
    `;
    response.send(html);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.mascotita);
    response.send("Tu mascotita es: " + request.body.mascotita);
});

module.exports = router;