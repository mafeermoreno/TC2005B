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