const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is-auth');

const app = express();

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

//CSRF Protection
const csrfProtection = csrf();
app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});
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

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

const rutasPerros = require('./routes/perros.routes');
app.use('/perros', rutasPerros);


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

/*
¿Qué otras formas de autentificación existen?
-Autenticación por contraseñas (el que utilizamos)
-Autenticación biométrica: Se usan características físicas como Face ID, huella dactilar, escaneo del ojo para verificar identidad.
-Autenticación de certificados: Certificados digitales que tienen info de la ID del usuario y se utiliza para verificar identidad en línea.
-Autenticación basada en la nube
-Autenticación basada en la red (Dirección IP)
-Autenticación de dos factores (Contraseña y un código enviado a SMS, o por ejemplo, la autenticación del Tec)
*/