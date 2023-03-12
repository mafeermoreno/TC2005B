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

/*
¿Qué beneficios encuentras en el estilo MVC?
-Existe una separación de responsabilidades (modelo, vista, controlador), esto hace que sea más fácil entender el código, pues los componentes están divididos de acuerdo a las tareas que estos realizan.
-Se puede reutilizaar el código, pudiendo pertenecer un modello para diferentes vistas/controladores sin tener que volver a copiarlo.
-Se puede cambiar la vista sin afectar el modelo o controlador.
-Fácil de colaborar pues la unión se da de mejor manera
-Fácil de testear
Referencia:https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-5.0
¿Encuentras alguna desventaja en el estilo arquitectónico MVC?
-Es algo compleja de usar, ya que de debe de implementar un código para la vista, otro para el modelo y otro para el controlador.
-Se tiene que saber de la arquitectura para poder usarla, de otra manera, es difícil intuírla.
*/