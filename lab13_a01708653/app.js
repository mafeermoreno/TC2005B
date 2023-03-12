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

const rutasPerros = require('./routes/perros.routes');
app.use('/perros', rutasPerros);

const hockeyRutas = require('./routes/hockey.routes');
app.use('/hockey', hockeyRutas);

const rutasChilaquiles = require('./routes/chilaquiles.routes');
app.use('/chilaquiles', rutasChilaquiles);

const rutasPelis = require('./routes/pelis.routes');
app.use('/pelis', rutasPelis);

const RifaRutas= require('./routes/lab11.routes');
app.use('/ingresar',RifaRutas);

const rutasLogin = require('./routes/login.routes');
app.use('/login', rutasLogin);

app.use((request, response, next) => {
    console.log("Tercer middleware");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);

