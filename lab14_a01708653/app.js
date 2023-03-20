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

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

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
-Existe una separación de responsabilidades, ya que separa en "Modelo, Vista, Controlador", de manera que es más fácil entender el código debido a esta separación .
-Se puede reutilizar el código, ya que un modelo puede utilizarse en otras vistas y controladores sin tenerlo que modificar.
-Es fácil de modificar y mejorar algunas partes de la aplicación sin alterar todo el programa (punto para el mantenimiento).
-Al momento de hacer pruebas, se puede probar eficientemente por cada parte, lo que lo hace fácil y eficiente.

 Referencia: MVC Framework Introduction, Geek for Geeks: https://www.geeksforgeeks.org/mvc-framework-introduction/

¿Encuentras alguna desventaja en el estilo arquitectónico MVC?
-Al momento que lo estuve implementando, pude notar que el MVC es algo difícil de entender, pues no es tan intuitivo y se requiere de aprender a usarlo.
-Se requiere de más tiempo para separar debidamente lo que va en la vista, lo que va en el controlador y lo que va en el modelo.
-Se complica un poco para entender la conexión entre los componentes, por lo que puede ser difícil para depurarlo.
 */