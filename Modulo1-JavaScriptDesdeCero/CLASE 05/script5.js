/*function resta(a, b) {
    let resultado = a - b;
    return resultado;//return es para devolver un valor a la función, es decir, el resultado de la resta
}

console.log(resta(10, 5));

function suma(a, b) {
    return a + b;
}
console.log(suma(10, 5));

function saludar(nombre) {
    console.log(saludar("Alice"));
}
saludar()

let multiplicar = function (a, b) {
    return a * b;
}
console.log(multiplicar(10, 5)); */

// Calculadora Simple con funciones

function sumar(a,b){
    return a + b;
} 
function restar(a,b){
    return a - b;
}
function multiplicar(a,b){
    return a * b;
}
function dividir(a,b){
    if(b === 0){
        return "No se puede dividir por cero";
    }
    return a/b;
}

//Llamadas a las funciones
console.log("Suma: " + sumar(10, 5));
console.log("Resta: " + restar(10, 5));
console.log("Multiplicación: " + multiplicar(10, 5));
console.log("División: " + dividir(10, 0));

//Conversor de temperatura 

function celsiusAFarenheit(celsius){
    return (celsius * 9/5) + 32;
}
function farenheitACelsius(farenheit){
    return (farenheit - 32) * 5/9;
}

//Llamadas a las funciones
console.log("20°C a Farenheit es: "+ celsiusAFarenheit(20)+"°F");
console.log("68°F a Celsius es: "+ farenheitACelsius(68)+"°C");

// Funcion es calcular el area de un triangulo 
// Funcion que recibe 3 numeros y que saque la multiplicación de ellos y cual es el resultado
// Función que reciba el nombre de una persona y saludarlo
// Cajero automatico usando funciones 
// Crea una función que divida dos números
// Función que te diga si es par o impar 

