const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    next();
});

app.use('/hola', (request, response, next) => {
    response.send('Hola desde la ruta /hola');
});

const rutasPelis = require('./routes/pelis.routes');

app.use('/pelis', rutasPelis);

const rutasLogin = require('./routes/login.routes');

app.use('/login', rutasLogin);

const hockeyRutas = require('./routes/hockey.routes');

app.use('/hockey', hockeyRutas);

const rutasChilaquiles = require('./routes/chilaquiles.routes');

app.use('/chilaquiles', rutasChilaquiles);

const RifaRutas= require('./routes/lab11.routes');
app.use('/ingresar',RifaRutas);

app.use((request, response, next) => {
    console.log("Tercer middleware");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);

/*
¿Qué otros templating engines existen para node?
Existen varios templating engines, el que utilizamos en este caso fue EJS (Embedded JavaScript), que permite integrar JavaScript en HTML para hacer el renderizado del lado del servidor. Pero también existen:
-Pug(antes Jade): Eran plantillas para escribir HTML de manera legible y con una sintaxis más sencilla que HTML
-Handlebars: Puede crear plantillas dinámicas y reutilizables. Puede integrar datos del lado del servidor en la plantilla y crear estructuras complejas.
-Nunjucks: Motor de plantillas que soporta herencia, bloques, macros, etc. Puede crear plantillas complenas y reutilizables de manera sencilla.
-Mustache: Herramienta simple que permite crear plantillas reutilizables sin lógica de programación compleja. Puede integrar datos en la plantilla de manera sencilla.
Fuentes:
https://nodejs.org/en/docs/guides/view-engine/
https://scotch.io/tutorials/the-ultimate-guide-to-nodejs-view-engines
 */