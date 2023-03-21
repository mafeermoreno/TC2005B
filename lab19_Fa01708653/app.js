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
¿En qué consiste el control de acceso basado en roles?
Es un modelo utilizado para limitar el acceso a recursos y datos de un sistema de información, donde se asignan roles a los usuarios y cada rol tiene permisos para hacer tareas.
-Roles: Conjuntos de permisos asignados a usuarios de acuerdo a su función
-Permisos: Acciones que un usuario puede realizar en el sistema.
-Usuarios: Personas que usan el sistema.

Investiguen y describan 2 sistemas, uno que aplique RBAC y uno que no. Realicen un análisis de las ventajas y desventajas de cada uno con respecto al control de acceso.
-Oracle Identity Manager
Permite asignar roles y los roles se asignan a permisos necesarios para realizar sus tareas. Esto conviene debido a la eficiencia en la gestión de los permisos de los usuarios, a la reducción de los riesgos de seguridad al limitar el acceso y a la facilidad de mantenimiento.

Uno que no es de RBAC es un sistema tradicional, donde se dan permisos individualmente a archivos y carpetas.
Las ventajas de este es que es flexible para definir permisos y es fácil de utilizar, pero es mucho más complejo para la gestión de permisos a medida que el sistema crece, es menos eficiente.

 */