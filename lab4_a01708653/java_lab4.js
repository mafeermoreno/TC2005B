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
let num_arreglo= prompt("Ingrese el tamaño de su arreglo");
let arreglo_num = new Array();
for (var i = 1; i <= num_arreglo; i++){
    let numero =prompt("Ingrese un número negativo, un cero o un número positivo");
    arreglo_num.push(numero);
}
document.write("<strong>El arreglo ingresado es: </strong>["+ arreglo_num+"]");
let ceros=0;
let negativos=0;
let positivos=0;
let tamanio=arreglo_num.length;
for (var j=1; j<= tamanio; j++){
    if (arreglo_num[j] > 0){
        positivos=positivos+1;
    }else if (arreglo_num[j]==0){
        ceros=ceros+1;
    }else{
        negativos=negativos+1;
    }
}
document.write("<br><strong>El número total de negativos en el array es: </strong>"+negativos);
document.write("<br><strong>El número total de positivos en el array es: </strong>"+positivos);
document.write("<br><strong>El número total de ceros en el array es: </strong>"+ceros);

//Ejercicio 4
document.write("<h2>Ejercicio 4: Promedio de una matriz</h2>");
let matriz_calif = new Array();
let matriz=new Array();
matriz_calif.push([10,10,9]);
matriz_calif.push([7,8,6]);
matriz_calif.push([10,8,10]);
let promedio=0;
document.write("<strong>Matriz de calificaciones inicial</strong><br>");
document.write("["+matriz_calif+"]<br><br>");
for(let r=0;r<matriz_calif.length;r++){
    document.write("<strong>Matriz de calificaciones dividida por filas</strong><br>");
    document.write(matriz_calif[r]);
    document.write("<br>");
    document.write("<strong>Promedio de las filas</strong><br>");
    let promedio=matriz_calif[r].reduce((a,n)=>(a+=n,a),0)/matriz_calif[r].length;
    document.write(promedio);
    document.write("<br><br>");
}

//Ejercicio 5
document.write("<h2>Ejercicio 5: Escribir el inverso de un número</h2>");
let num_inv= prompt("Ingresa un número de dos o más cifras");
document.write("<strong>Número ingresado: </strong>"+num_inv);
function inverso(number){
    return Number(number.toString().split('').reverse().join(''));
}
document.write("<br><strong>Número ingresado invertido: </strong>"+inverso(num_inv))

//Ejercicio 6
document.write("<h2>Ejercicio 6: Escribir el inverso de un número</h2>");
let anioNac = prompt("Ingrese tu año de nacimiento (ej.2020)<br>");
let mesNac = prompt("Ingrese tu mes de nacimiento(del 1 al 12)<br>");
let diaNac = prompt("Ingrese tu día de nacimiento(del 1 al 31)<br>");
let fechaNac= new Date (anioNac,mesNac-1,diaNac);
document.write("<strong>Fecha de nacimiento ingresada: </strong>"+fechaNac+"<br>");
let fechaAct= new Date();
let diaAct= fechaAct.getDate();
let mesAct = fechaAct.getMonth();
let anioAct =fechaAct.getFullYear();
document.write("<strong>Fecha actual: </strong>"+fechaAct);
let diferencia=fechaAct.getTime()-fechaNac.getTime();
let diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24;
document.write("<br><strong>Los días vivídos al día de hoy son: </strong>"+diasDeDiferencia);