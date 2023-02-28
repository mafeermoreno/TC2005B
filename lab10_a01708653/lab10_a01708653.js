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
        response.write("<h1>Chilaquiles</h1>");
        response.write('<a href="/ordenar">Ordena tus chilaquiles aquí</a>');
        response.end();
    }
});

