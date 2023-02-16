//variables, constantes, consola (log, info, warn, error, assert)
//Alcance de las variables

var comida="chilaquiles";

let cena="tacos";

let precio=70;

console.log("hola");
console.info("valor de la comida "+comida);
console.warn("El precio no se puede modificar");
console.error("Te dije que el precio no se puede modifiar");

console.assert(1===1);
console.assert(1==="1");
console.assert(1=="1");
console.assert(1==true);
console.assert(1===true);

//Alcance de las variables
for (let i=1; i<=10; i++){

}
//Aquí ocurre un error porque la variable "i" ya murió al terminar el ciclo
console.log(i);

for (var i=1; i<=10; i++){

}
//Aquí no hay error, la variable u sigue existiendo
console.log(i)

//alert, prompt, confirm
alert("hola!");

let nombre=prompt("¿Cómo te llamas?");

console.log("Hola "+nombre);

let is_hungry=confirm("¿Tienes hambre?");

console.log(is_hungry);

//funciones tradicionales
function numero_tacos (){
    return 5;
}

console.log(numero_tacos());

//Funciones modernas
//()=> {} //Función anónima que no hace nada
//()=> {5} //Función que hace lo mismo que la función tradicional
let cantidad_tacos=()=>{
    return 5
} //Le agrego a una variable una función anónima para decirle qué es lo que quiero que haga cuando le pico a un botón

console.log(cantidad_tacos()); 

//html dinámico con eventos
let boton=document.getElementById("buenos-dias");
boton.innerHTML="¡Buenos días";
boton.onclick=()=>alert("¡Bueeeenooos díaaass!");

//arreglos
const arreglo=["Elemento"];
arreglo.push("Otro elemento");
arreglo["dos"]=2;
arreglo.lenght=10;
arreglo[20]="Fin del arreglo";
console.log(arreglo);

//ciclo for
for (let valor in arreglo){
    console.log(valor);
}

//Objetos
let objeto={
    atributo_1:"valor 1",
    atributo_2:2
}

console.log(objeto.atributo_1);
console.log(objeto.atributo_2);
objeto.atributo_3="tres";

console.log(objeto);


console.log(objeto);

for (let elemento in objeto){
    console.log(elemento);
}

const arreglo_de_objeto =[{atributo_1:"valor 0", atributo_2:1},{},objeto];

for (let elemento in objeto){
    console.log(objeto.elemento);
}
