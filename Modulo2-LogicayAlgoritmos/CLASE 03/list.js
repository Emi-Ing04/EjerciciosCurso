/*let frutas = ["manzana", "banana", "naranja", "pera"]

// Acceder a un elemento del array
console.log(frutas[0]) // manzana
console.log(frutas[2]) // naranja

// Metodos para arrays

.push() // Agrega un elemento al final del array
.pop() // Elimina el ultimo elemento del array
.shift() // Elimina el primer elemento del array
.unshift() // Agrega un elemento al inicio del array
.indexOf() // Devuelve el indice de un elemento en el array
.includes() // Devuelve true si el elemento existe en el array, false si no existe
.length // Devuelve la cantidad de elementos en el array
forEach() // Itera sobre cada elemento del array y ejecuta una funcion
.map() // Crea un nuevo array con los resultados de la funcion aplicada a cada elemento del array
.filter() // Crea un nuevo array con los elementos que cumplen una condicion
.reduce() // Aplica una funcion a un acumulador y a cada elemento del array para reducirlo a un solo valor
some() // Devuelve true si al menos un elemento del array cumple una condicion, false si no cumple ninguna
every() // Devuelve true si todos los elementos del array cumplen una condicion, false si al menos uno no cumple la condicion
reduceRight() // Aplica una funcion a un acumulador y a cada elemento del array de derecha a izquierda para reducirlo a un solo valor
*/
//Algoritmos Secuenciales Condicional Repetitivos
// Algortimo de busqueda (find), de ordenamiento (sort) y de verificación de datos (includes y indexOf)

//Algoritmo de busqueda: find - Son tecnicas que nos sirven para encontrar elementos de una colección de datos
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultado = numeros.find(num => num === 5)
console.log(resultado) // 5

let buscando = 9 
let resultados = null

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === buscando) {
        resultados = numeros[i]
        break;
    }
}
console.log(resultados);

let verduras = ["lechuga", "tomate", "pepino", "zanahoria"]
let resultadoVerduras = verduras.find(verdura => verdura === "tomate")
console.log(resultadoVerduras) // tomate

let Buscar = "pepino"
let resultadoBuscar = null
for (let i = 0; i < verduras.length; i++) {
    if (verduras[i] === Buscar) {
        resultadoBuscar = verduras[i]
        break;
    }
}
console.log(resultadoBuscar);

let usuarios = ['juan', 'maria', 'pedro', 'Ana']
let r = usuarios.find(usr => usr === "Maria")
console.log(r) // undefined, porque las mayusculas y minusculas en el codigo ASCII son diferentes


//Algoritmo de transformacion: map - Son tecnicas que nos sirven para transformar elementos de una colección de datos
let numbersDouble = [2,3,4,5,6,10]
let res = numbersDouble.map(num => num * num)
console.log(res) // [4, 9, 16, 25, 36, 100]

let resu = []
for (let i=0; i < numbersDouble.length; i++) {
    resu.push(numbersDouble[i] * numbersDouble[i])
}
console.log(resu) // [4, 9, 16, 25, 36, 100]

// Algoritmo de ordenamiento: sort - Son tecnicas que nos sirven para ordenar elementos de una colección de datos
let numeroSinOrdenar = [4, 2, 9, 1, 5, 6]

function bubleSort(arr) {
    //Recorrido de todo el arreglo
    for (let i = 0; i < arr.length; i++) {
        //El recorrido de la comparación
        for (let j=0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j + 1]) {

                // Variable para guardar el valor temporalmente
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
            console.log(arr);
        }
    }

    return arr
}
console.log(bubleSort(numeroSinOrdenar)) // [1, 2, 5, 5, 6, 9]

numbers=[4,14,16,78,2,1,5,6,9]
numbers.sort((a, b) => a - b)
console.log(numbers) // [1, 2, 4, 5, 6, 9]


