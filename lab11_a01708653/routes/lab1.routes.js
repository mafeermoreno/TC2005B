const express = require('express');

const router = express.Router();

router.get('/thisisme', (request, response, next) =>{
    let html = `
        <html>
        <head><meta charset="utf-8"></head><body>
        <h1>Sobre mí</h1>
        <footer>María Fernanda Moreno Gómez_A01708653<br> Correo: A01708653@tec.mx <br> Editor: Visual Studio Code <br> Link del editor:https://code.visualstudio.com/ </footer>
        <a href="../ingresar/pedispa">Volver atrás</a>
        <br>
        <a href="/lab1/meetme">Ver lab1</a>
    `;
    response.send(html);
});

router.get('/meetme', (request, response, next) => {
    let html = `
    <header>
        <h1 style="color: rgb(255, 0, 153); letter-spacing: 2px; padding: 10px">Esta soy yo</h1>
    </header>
    <nav>
        <section id="inicio">
            <h2>Menú</h2>
            <ul>
                <li style="color: blue;"><a href="#inicio" style="color: blue;">Inicio</a></li>
                <li style="color: blue;"><a href="#quien-soy" style="color: blue;">¿Quién soy?</a></li>
                <li style="color: blue;"><a href="#datos-generales" style="color: blue;">Datos generales</a></li>
                <li style="color: blue;"><a href="#preguntas-tarea" style="color: blue;">Preguntas de tarea</a></li>
            </ul>      
            <form>
                <input type="search" name="q" placeholder="Search" />
                <input type="submit" value="Buscar" />
            </form>
        </section>
    </nav>
    <section id="quien-soy">
        <h2>¿Quién soy?</h2>
        <p style="color:rgb(43, 42, 43)">
            Mi nombre es María Fernanda Moreno Gómez, soy alumna del Tec de Monterrey, mi matrícula es A01708653
            y actualmente estoy estudiando Ingeniería en Tecnologías Computacionales. <br>
            Soy alguien que se considera muy creativa, es por eso que se me dan varias actividades manuales, pero 
            también me gustan las artes y aprender varias cosas.<br><br>
            <strong style="color:midnightblue">Mis actividades favoritas son:</strong><br>
            <ul style="color:rgb(43, 42, 43);">
                <li>Bailar</li>
                <li>Hornear</li>
                <li>Estar con mis amigos</li>
                <li>Ver series</li>
                <li>Hacer manualidades</li>
                <li>Escuchar Harry Styles y One direction</li>
                <li>Jugar con mi perrita Zuri</li>
                <li>Salir de compras o a pasear</li>
            </ul>
    </section>
    <section id="datos-generales">
        <h2>Datos generales</h2>
        <p style="color:rgb(43, 42, 43)">
            <table style="color:rgb(43, 42, 43);">
                <tr>
                    <td style="background-color: rgb(236, 206, 229)"><strong>Nombre</strong></td>
                    <td>María Fernanda Moreno Gómez</td>
                </tr>
                <tr>
                    <td style="background-color: rgb(236, 206, 229)"><strong>Matrícula</strong></td>
                    <td>A01708653</td>
                </tr>
                <tr>
                    <td style="background-color: rgb(236, 206, 229)"><strong>Edad</strong></td>
                    <td>20 años</td>
                </tr>
                <tr>
                    <td style="background-color: rgb(236, 206, 229)"><strong>Soy de...</strong></td>
                    <td>Guadalajara</td>
                </tr>
                <tr>
                    <td style="background-color: rgb(236, 206, 229)"><strong>Signo zodiacal</strong></td>
                    <td>Acuario</td>
                </tr>
                <tr>
                    <td style="background-color: rgb(236, 206, 229)"><strong>Color favorito</strong></td>
                    <td>Rosa</td>
                </tr>
                <tr>
                    <td style="background-color: rgb(236, 206, 229)"><strong>Animal favorito</strong></td>
                    <td>Orca</td>
                </tr>
            </table>
    
    </section>
    <section id="preguntas-tarea">
        <h2>Preguntas de la tarea</h2>
        <ul style="color:rgb(43, 42, 43);">
            <li><strong>Describe el archivo package.json.</strong><br>
            Primeramente tenemos el nombre, versión, descripción y el main (de donde se controla el programa) de nuestro proyecto, para posteriormente iniciar el nodemon y tirar un error cuando no funcione. Después, vienen los datos de nuestro repositorio, como el tipo (git) y el url donde se encuentra. Pasamos a las keywords, que son palabras con las cuales podemos encontrar nuestro proyecto: Luego, está la parte del autor, donde tenemos nuestro nombre, licencia, bugs, y dependencias. Básicamente es para darle identidad a tu proyecto.
            </li>
        </ul>
    </section>
    `;
    
    response.send(html);
});

module.exports = router;