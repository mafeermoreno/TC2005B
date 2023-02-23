console.log("Hola mundo desde node");
console.info("Este script se está ejecutando desde una computadora y no desde el navegador");
console.warn("document,alert, confirm y propmt, no existen en el entorno de ejecición de node");
console.error("Así se ve un error");

//fs es el módulo para trabajar con el sistema de archivos
const filesystem=require('fs');
//Función síncrona, si es asíncrona, recibe otro parámetro con un apuntador
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Terminamos de escribir el archivo");
















// const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

// for (let item of arreglo) {
//     setTimeout(() => {
//         console.log(item);
//     }, item);
// } 














// const http = require('http');

// const server = http.createServer( (request, response) => {    
//     console.log(request.url);
//     response.setHeader('Content-Type', 'text/html');
//     response.write("");
//     response.end();
// });

// server.listen(3000);