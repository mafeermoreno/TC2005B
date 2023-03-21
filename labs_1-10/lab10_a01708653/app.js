//fs es el módulo para trabajar con el sistema de archivos
const filesystem=require('fs');

//http es el módulo que permite crear un servidor o que pueda atender peticiones http
const http = require('http');

//Recibe como parámetro, una función anónima, un parámetro para lo que se pide (objeto con los datos de la petición en la web) y otra para la respuesta, que se puede ir modificando
const server = http.createServer( (request, response) => {
    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" /></head><body>');
        response.write("<h1>One Direction</h1>");
        response.write('<a href="/miembros">Conozca a los miembros aquí</a>');
        response.write('<br>');
        response.write('<a href="/album">Ver los álbumes de la banda</a>');
        response.end();
    }
    else if (request.url === "/miembros" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" /></head><body>');
        response.write("<h1>One Direction</h1>");
        response.write('<form action="/miembros" method="POST">');

        let radios = '<fieldset><legend>¿Qué tanto sabes de los miembros de One Direction? Elige uno y ponlo a prueba</legend>';
        radios += '<div><input type="radio" id="harry" name="miembro1d" value="harry" checked>'
        radios += '<label for="harry">Harry Styles</label></div>';
        radios += '<div><input type="radio" id="niall" name="miembro1d" value="niall" checked>'
        radios += '<label for="niall">Niall Horan</label></div>';
        radios += '<div><input type="radio" id="louis" name="miembro1d" value="louis" checked>'
        radios += '<label for="louis">Louis Tomlinson</label></div>';
        radios += '<div><input type="radio" id="liam" name="miembro1d" value="liam" checked>'
        radios += '<label for="liam">Liam Payne</label></div>';
        radios += '<div><input type="radio" id="zayn" name="miembro1d" value="zayn" checked>'
        radios += '<label for="zayn">Zayn Malik</label></div>';

        response.write(radios)

        response.write('<label for="pregunta">Ciudad de nacimiento: </label>');
        response.write('<input type="text" id="pregunta" name="pregunta"><br><br>');
        response.write('<label for="pregunta">¿Cuántos hijos tiene?: </label>');
        response.write('<input type="text" id="pregunta" name="pregunta"><br><br>');
        response.write('<label for="pregunta">¿Cuántos álbumes tiene como solista?: </label>');
        response.write('<input type="text" id="pregunta" name="pregunta"><br><br>');
        response.write('<label for="pregunta">Escribe el color del que era su micrófono en One Direction: </label>');
        response.write('<input type="text" id="pregunta" name="pregunta"><br><br>');

        response.write('<input type="submit" value="Subir">');
        response.write('<a href="/">Subir respuestas y regresar</a>')

        response.write("</form>");
        response.write('</body></html>');
        response.end();
    }
    else if (request.url === "/miembros" && request.method === "POST"){

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const miembro1d = datos_completos.split('&')[0].split('=')[1];
            console.log(miembro1d);

            if(miembro1d === "harry") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Buen intento, sigue mejorando en conocer más datos sobre nuestro ganador de grammys<br>");
                response.write('<img alt="Harry" src="https://images.hola.com/imagenes/actualidad/20230206225880/harry-styles-ganador-mejor-album-trayectoria/1-199-908/harry-styles-getty-t.jpg?tx=w_680">');
                return response.end();
            }
            else if (miembro1d == "niall"){
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Buen intento, sigue mejorando en conocer a  nuestro duende irlandés<br>");
                response.write('<img alt="Niall" src="https://elgeneracionalpost.com/wp-content/uploads/2023/02/foto-niall.jpg">');
                return response.end();
            }
            else if (miembro1d == "louis"){
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Buen intento, sigue mejorando en conocer a  nuestro wachuchurumi<br>");
                response.write('<img alt="Louis" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNRKVcINGPrG7Z22TeTK7cHUROYTkfjPCjg&usqp=CAU">');
                return response.end();
            }
            else if (miembro1d == "liam"){
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Buen intento, sigue mejorando en conocer a  nuestro daddy direction<br>");
                response.write('<img alt="Liam" src="https://static.wikia.nocookie.net/doblaje/images/b/b8/LiamPayne2021.jpg/revision/latest?cb=20221126070807&path-prefix=es">');
                return response.end();
            }
            else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Buen intento, sigue mejorando en conocer a  nuestro príncipe árabe<br>");
                response.write('<img alt="Zayn" src="https://cdn-3.expansion.mx/dims4/default/1aae5e5/2147483647/strip/true/crop/1000x1500+0+0/resize/1200x1800!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F98%2Fd6%2F9def256044b59b68e3cc77dba775%2Fzayn-malik.jpg">');
                return response.end();
            }
        });
    }
    else if (request.url === "/album"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Álbumes de One Direction</h1>");
        response.write('Up All Night<br>Take Me Home<br>Midnight Memories<br>FOUR<br>Made In The A.M.<br>');
        response.write("<footer>María Fernanda Moreno Gómez A01708653 <br> Editor: Visual Studio Code <br> Link del editor:https://code.visualstudio.com/ </footer>")
        response.write('<a href="/">Volver a la principal</a>')
        response.end();
    }
    else{
        response.statusCode = 404;
        response.write("Página no encontrada, inténtelo de nuevo");
        response.end();
    }
});
server.listen(3300);
