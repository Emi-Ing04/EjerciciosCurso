//Algoritmo de los dos punteros
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let izquierda = 0; // Apunta al primer elemento
let derecha = numeros.length - 1; // Apunta al último elemento

while (izquierda < derecha) {
    let suma = numeros[izquierda] + numeros[derecha];

    if (suma === 10) {
        console.log(numeros[izquierda], numeros[derecha]);
        break

    }

    if (suma < 10) {
        izquierda++; // Mover el puntero izquierdo hacia la derecha
    } else {
        derecha--; // Mover el puntero derecho hacia la izquierda
    }   
}


let num = [1, 2, 3, 4, 4, 5, 2, 6, 8];

num.sort((a, b) => a - b); 
let duplicado = 0; 

for (let i=1; i < num.length; i++) {
    if (num[i] !== num[duplicado]) {
        duplicado++;
        num[duplicado] = num[i];
    }
}

console.log(num.slice(0, duplicado + 1));// esta linea de código muestra el resultado final del arreglo sin duplicados, utilizando el método slice para obtener solo la parte relevante del arreglo.
