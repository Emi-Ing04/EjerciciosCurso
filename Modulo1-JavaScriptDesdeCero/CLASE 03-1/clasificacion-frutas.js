
// Código para clasificar frutas
// Se crea un array con el nombre de las frutas 
let frutas = ["manzana", "banana", "naranja", "pera", "uva","manzana", "banana", "naranja", "pera", "uva", "manzana", "banana"];
// Se crea un objeto para clasificar las frutas, vacío al inicio
let conteoFrutas = {};

console.log("--- Iniciando conteo de frutas con FOR---");
/* Estructura de ciclo FOR se empieza en 0 (i=0), se detiene cuando llega al final de la banda (i < frutas.length)
 y avanza de 1 en 1 (i++)*/
for (let i=0; i < frutas.length; i++) {
    let frutaActual = frutas[i]; //Se toma la fruta que va pasando en ese momento del contador
    //Si la fruta ya existe en el objeto, se suma 1 a la cuenta
    if (conteoFrutas[frutaActual]) {
        conteoFrutas[frutaActual]++;
    }
    else {
        // Si es la primera vez que se detecta la fruta, se registra con el numero 1.
        conteoFrutas[frutaActual] = 1;
    }
}
//Se imprime el resultado del conteo de frutas
console.log("Reporte final de frutas con FOR:", conteoFrutas);


/* Contador de frutas con ciclo While */
let conteoFrutasWhile = {};
let j = 0; // Se inicia el contador en 0
console.log("--- Iniciando conteo de frutas con WHILE ---");
while (j < frutas.length) {
    let frutaActual = frutas[j]; // Se toma la fruta que va pasando en ese momento del contador
    // Si la fruta ya existe en el objeto, se suma 1 a la cuenta
    if (conteoFrutasWhile[frutaActual]) {
        conteoFrutasWhile[frutaActual]++;
    }
    else {
        // Si es la primera vez que se detecta la fruta, se registra con el numero 1.
        conteoFrutasWhile[frutaActual] = 1;
    }
    j++; // Se incrementa el contador para avanzar al siguiente elemento del array
}
console.log("Reporte final de frutas con WHILE:", conteoFrutasWhile);