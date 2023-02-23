//Ejercicio 1
document.write("<h2>Ejercicio 1: Recibe un número y sale una lista de números del 1 al número dado con su cuadrado y su cubo</h2>");
let typed_num = prompt("Ingrese un número");
let square=0;
let cube=0;

for (var i = 1; i <= typed_num; i++) {
    //console.log(i);
    document.write("<strong>Número: </strong>");
    document.write(i);
    document.write("<br>");
    square=i*i;
    document.write("<strong>Número al cuadrado: </strong>");
    document.write(square);
    document.write("<br>");
    //console.log(square);
    cube=i*i*i;
    //console.log(cube);
    document.write("<strong>Número al cubo: </strong>");
    document.write(cube);
    document.write("<br><br>");
}

//Ejercicio 2
document.write("<h2>Ejercicio 2: Suma de dos números aleatorios</h2>");
//Math.floor devuelve el máximo entero menor o igual a un número (de un número decimal devuelve el número entero)
//Math.random devuelve un número decimal aleatorio en un rango de 0≤x<1
let aleatorio1 = Math.floor(Math.random()*100);
let aleatorio2 = Math.floor(Math.random()*100);
var primeraToma = Date.now();
let suma = prompt("Ingrese la suma de "+aleatorio1+"+"+aleatorio2);

let sumaReal = aleatorio1+aleatorio2;

if(suma==sumaReal){
    document.write("El resultado es correcto")
}else{
    document.write("El resultado es incorrecto, respuesta correcta es "+sumaReal);
}
var segundaToma = Date.now();
resultado = (segundaToma-primeraToma)/1000;
alert("Has contestado en: "+resultado+" segundos!!!");

//Ejercicio 3
document.write("<h2>Ejercicio 3: Contador de números negativos, 0´s y valores mayores a 0</h2>");