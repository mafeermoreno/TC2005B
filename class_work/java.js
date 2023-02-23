// variables, constantes, consola (log, info, warn, error, assert)

var comida = "chilaquiles";

let cena = "tacos";

const precio = 70;

console.log("hola");
console.info("Valor de la comida: " + comida);
console.warn("El precio no se puede modificar");
console.error("Te dije que el precio no se puede modificar");

console.assert(1 === 1);
console.assert(1 === "1");
console.assert(1 == "1");
console.assert(1 == true);
console.assert(1 === true);

// Alcance de las variables
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Aquí ocurre un error, porque la variable i murió al terminar el ciclo
console.log(i);

for (var i = 1; i <= 10; i++) {
    console.log(i);
}
//Aquí no hay error, la variable i sigue existiendo
console.log(i);


// funciones tradicionales
function numero_tacos() {
    return 5;
}

console.log(numero_tacos());


// funciones modernas
let cantidad_tacos = () => {
    return 5;
}

console.log(cantidad_tacos());



// html dinámico con eventos
let boton = document.getElementById("buenos_dias");
boton.innerHTML = "¡Buenos días!";
boton.onclick = () => {
    alert("¡Bueeenos díasss!");
    document.getElementById("ejercicios").innerHTML = 
        "Aquí va la respuesta de los ejercicios";
}


// arreglos
const arreglo = ["Elemento"];

arreglo.push("Otro elemento");
arreglo["dos"] = 2;
arreglo.length = 10;
arreglo[20] = "Fin del arreglo";

console.log(arreglo);

for (let elemento in arreglo) {
    console.log(elemento);
}

for (let valor of arreglo) {
    console.log(valor);
}


//Objetos
const objeto = {
    atributo_1: "valor 1",
    atributo_2: 2
}

console.log(objeto.atributo_1);
console.log(objeto.atributo_2);
objeto.atributo_3 = "tres";

console.log(objeto);

for (let elemento in objeto) {
    console.log(elemento);
}

const arreglo_de_objetos = [{atributo_1: "valor 0", atributo_2: 1}, {}, objeto];
console.log(arreglo_de_objetos);

//Funciones modernas
//()=> {} //Función anónima que no hace nada
//()=> {5} //Función que hace lo mismo que la función tradicional
//let cantidad_tacos=()=>{
    //return 5
//} //Le agrego a una variable una función anónima para decirle qué es lo que quiero que haga cuando le pico a un botón

//console.log(cantidad_tacos()); 

//html dinámico con eventos

document.getElementById("boton_verdes").onclick=()=>{
    
}
