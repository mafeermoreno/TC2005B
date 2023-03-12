const express = require('express');

const filesystem =require ('fs');

const router = express.Router();

router.get('/pedispa', (request, response, next) => {
    
    let html = `
        <html>
        <head><meta charset="utf-8"></head><body>
        <h1>¡Rifa para ganarte hasta un auto!</h1>
        <a href="/ingresar/encuesta">Ver más</a>
        <a href="/login/ingresar">Volver a Barbie</a>
        <br>
    `;
    response.send(html);
});

router.get('/encuesta', (request, response, next) => {
    let html = `
        <html>
        <head><meta charset="utf-8"></head><body>
        <h1>¡Gánate un auto y distintos premios con nosotros!</h1>
        <form action="/encuesta" method="POST">

        <fieldset><legend>¿Cuántos años tenemos como empresa?></legend>
        <div><input type="radio" id="respuestauno" name="cinco" value="CincoAnios"></div>
        <label for="respuestauno">5 años</label></div>
        <div><input type="radio" id="respuestados" name="seis" value="respuestados"></div>
        <label for="respuestados">6 años</label></div>
        <div><input type="radio" id="respuestatres" name="siete" value="SieteAnios"></div>
        <label for="respuestatres">7 años</label></div>

        <fieldset><legend>Escoge los servicios que ofrecemos></legend>
        <input type="checkbox" id="respuestacuatro" name="serviciouno" value="Pedicura">
        <label for="respuestacuatro">Pedicura</label><br>
        <input type="checkbox" id="respuestacinco" name="serviciodos" value="Manicura">
        <label for="respuestacinco">Manicura</label><br>
        <input type="checkbox" id="respuestaseis" name="serviciotres" value="Peinado">
        <label for="respuestaseis">Peinado</label><br>
        <input type="checkbox" id="respuestasiete" name="serviciocuatro" value="Maquillaje">
        <label for="respuestasiete">Maquillaje</label><br>
        <input type="checkbox" id="respuestaocho" name="serviciocinco" value="Masaje">
        <label for="respuestaocho">Masaje</label><br>
        <input type="checkbox" id="respuestanueve" name="servicioseis" value="LashLifting">
        <label for="respuestanueve">Lash lifting</label><br><br>

        <a href="/ingresar/contacto">Ingresar información de contacto</a>
        <br>
        <a href="/login/ingresar">Volver a Barbie</a>
        </form>
        </body></html>
    `;
    response.send(html);
});

router.get('/contacto', (request, response, next) => {
    let html = `
        <h3>Ingresa tus datos para poder contactarte</h3>
        <form action="/ingresar/contacto" method="POST">
        <label for="identidad">Ingresa tu user de Instagram: </label>
        <input type="text" id="identidad" name="identidad">value="Identidad"><br><br>
        <label for="nombre">Ingresa tu nombre: </label>
        <input type="text" id="nombre" name="nombre">value="Nombre"><br><br>
        <label for="edad">Ingresa tu edad: </label>
        <input type="text" id="edad" name="edad">value="Edad"><br><br>

        <input type="submit" value="Enviar"><br>
        <a href="/login/ingresar">Volver a Barbie</a>
        </form>
    `;
    response.send(html);
});

router.post('/contacto', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.identidad);
    let identidad=request.body.identidad;
    let nombre=request.body.nombre;
    let edad=request.body.edad;
    let datos=`User: ${identidad} \nNombre: ${nombre}  \nEdad ${edad}`
    filesystem.writeFileSync('datos.txt',datos)
    response.send("Hola "+request.body.nombre+", gracias por participar, si ganas, te contactaremos a través de tu Insta "+request.body.identidad);
});

module.exports = router;