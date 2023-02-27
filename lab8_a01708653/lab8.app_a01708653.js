const http = require('http');

const hostname = '127.0.0.1';
const port = 3200;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Ejercicio 1
function promArreglo(arreglo1){
    let suma=0;
    var longitud= arreglo1.length;
    for (let i=0; i<arreglo1.length; i++){
        suma=(suma+arreglo1[i]);
    }
    let prom=(suma/longitud);
    if (longitud==0){
        return prom=0;
    }
    else{
        return prom;
    }
}
console.log("Promedio del arreglo: ");
console.log(promArreglo([200,4923,235,4425,200,2345]))

//Ejercicio 2
function string2txt(string1){
    //fs es el módulo para trabajar con el sistema de archivos
    const filesystem=require('fs');
    //Función síncrona, si es asíncrona, recibe otro parámetro con un apuntador
    filesystem.writeFileSync('Ejercicio2.txt', string1);
}
string2txt("Me gusta mucho escribir en Node js")
console.log("Terminamos de escribir el archivo");

//Ejercicio 3 Bubble Sort
function bubblesort (arreglo2){
    let tamanio=arreglo2.length;
    for (let m=tamanio-1; m>0; m--){
        for (let n=0; n<tamanio; n++){
            if(arreglo2[n]>arreglo2[n+1]){
                let swap = arreglo2[n];
                arreglo2[n]=arreglo2[n+1];
                arreglo2[n+1]=swap
            }
        }
    }
    return arreglo2;
}
console.log("Arreglo enviado: [6,4,2,5,7]")
console.log("Arreglo ordenado con Bubblesort:")
console.log(bubblesort([6,4,2,5,7]));