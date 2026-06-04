//Método filter - Son tecnicas que nos sirven para filtrar elementos de una colección de datos, nos ayuda a mostrar ciertos datos del arreglo.
let edades = [18, 25, 30, 15, 40, 22]
let resultado = edades.filter(edad => edad >= 18 && edad <= 30)
console.log(resultado) // [18, 25, 30, 22]

let numbers = [15,23,45,67,89,12,34,56,78,90]
let result = []
let indice = 0
for (let i=0; i < numbers.length; i++) {
    if (numbers[i] >= 20 && numbers[i] <= 30) {
        result[indice] = numbers[i]
        indice++ // esta linea de código es para incrementar el indice del arreglo result cada vez que se agrega un nuevo número que cumple la condición.
    }
}
console.log(result);

//Algoritmo de reducción
let numeros = [10,24,85,90,45,67,23,12,34,56]
let suma = numeros.reduce((acumulador, numero) => {return acumulador + numero}, 0) // el segundo argumento del método reduce es el valor inicial del acumulador, en este caso es 0.
console.log(suma)

let sumas = numeros.reduce((acc,n) => acc + n, 1) // Esta línea de código es una forma más concisa de escribir la función de reducción para sumar los números del arreglo numeros.
console.log(sumas)

let number = [10,24,85,90,45,67,23,12,34,56]
let sumar = 0
for (let i=0; i < number.length; i++) {
    sumar += number[i] // esta linea de código es para sumar cada número del arreglo number al valor de la variable suma.
}
console.log(sumar)

//Ejemplo de reduce con objetos

let personas = [
    {nombre: "Juan", edad: 25},
    {nombre: "María", edad: 30},
    {nombre: "Pedro", edad: 20},
    {nombre: "Ana", edad: 35},  
    {nombre: "Luis", edad: 28}
]

let totalEdad = personas.reduce((acc, persona) => acc   + persona.edad, 0) // esta línea de código es para sumar las edades de todas las personas del arreglo personas utilizando el método reduce.
console.log(totalEdad);

// Aplicación de reduce en concatenación de strings
let palabras = ["Hola", "mundo", "desde", "JavaScript"]
let frase = palabras.reduce((acc, palabra) => acc + " " + palabra) // esta línea de código es para concatenar las palabras del arreglo palabras en una sola frase utilizando el método reduce.
console.log(frase);

// Método every () - Este método se utiliza para verificar si todos los elementos de un arreglo cumplen con una condición específica. Devuelve true si todos los elementos cumplen la condición, y false si al menos uno no la cumple.

let ages = [18, 25, 30, 15, 40, 22]
let allAdults = ages.every(age => age >= 18) // esta línea de código es para verificar si todos los elementos del arreglo ages son mayores o iguales a 18 utilizando el método every.
console.log(allAdults) // false

// Con algotitmo tradicional o validación

let pares = [2, 4, 7, 8, 10, 12, 14, 16, 18, 20]
let esPar = true
for (let i=0; i < pares.length; i++) {
    if (pares[i] % 2 !== 0) {
        esPar = false
        break
    }
}
console.log(esPar)

//Método Include () - Este método se utiliza para verificar si un arreglo contiene un elemento específico. Devuelve true si el elemento está presente en el arreglo, y false si no lo está.
// El find nos devuelve el elemento y con el include nos da un valor booleano, es decir, true o false dependiendo si el elemento se encuentra o no en el arreglo.
let numero = [0, 1, 2, 3, 4, 5]
let existe = numero.includes(3) // esta línea de código es para verificar si el número 3 está presente en el arreglo numero utilizando el método includes.
console.log(existe) // true

let textos = "JavaScript"
console.log (textos.includes("Script")) // true
