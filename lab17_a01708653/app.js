const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

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

/*const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);*/

const rutasPerros = require('./routes/perros.routes');
app.use('/perros', rutasPerros);

const rutasPelis = require('./routes/pelis.routes');
app.use('/pelis', rutasPelis);

app.use((request, response, next) => {
    console.log("Tercer middleware");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);

/*
¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo?
-Se puede reutilizar el código en toda la aplicación, evitando duplicar el código
-Se puede separar las responsabilidades, pues es más fácil de entender y mantener, ya que cada capa tiene una función específica.
-Se pueden aplicar medidas de seguridad como lo vimos en la clase para los datos.

¿Qué es SQL injection y cómo se puede prevenir?
-Es un ataque donde se ejecutan comandos en SQL de una página web no deseados o se accede/manipula datos de a base de datos, lo que hace que puedan leer, modificar o eliminar datos de la base de datos
Se puede prevenir validando a los usuarios (como lo explicó Lalo, con autenticaciones que validen el usuario ingresado)
Restringir permisos de acuerdo a los usuarios, para que estos tengan acceso limitado y realicen únicamente lo necesario
Consultas preparadas para evitar inyectar código malo.
 */