//Ejercicio 1.- Clasificar las etapas del humano 0-12 niño, 13-19 adolescente, 20-59 adulto
let edad = 10;

if (edad >= 0 && edad <= 12) {
    console.log("Eres un niño");
} else if (edad >= 13 && edad <= 19) {
    console.log("Eres un adolescente");
} else if (edad >= 20 && edad <= 59) {
    console.log("Eres un adulto");
} else {
    console.log("Edad no válida");
}

switch (true) {
    case (edad >= 0 && edad <= 12):
        console.log("Eres un niño");    
        break;
    case (edad >= 13 && edad <= 19):
        console.log("Eres un adolescente"); 
        break;
    case (edad >= 20 && edad <= 59):
        console.log("Eres un adulto");
        break;
    default:
        console.log("Edad no válida");
}


//Ejercicio 2.- Clasificar el tipo de triángulo según sus lados
let lado1 = 5;
let lado2 = 3;
let lado3 = 4;

if (lado1 == lado2 && lado2 == lado3) {
    console.log("El triángulo es equilátero");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("El triángulo es isósceles");
} else {    console.log("El triángulo es escaleno");
}

//Ejercicio 3.- Ten 3 numeros y muestra cual es el mayor y cual es el menor
let num1 = 10;
let num2 = 20;
let num3 = 5;   
let mayor = num1;
let menor = num1;
if (num2 > mayor) {
    mayor = num2;
}if (num3 > mayor) {
    mayor = num3;
}   if (num2 < menor) {
    menor = num2;
}if (num3 < menor) {
    menor = num3;
}   console.log("El número mayor es: " + mayor);
console.log("El número menor es: " + menor);

//Ejercicio 4.- Pide usuario y contraseña, si el usuario es "admin" y la contraseña es "1234" muestra un mensaje de bienvenida, de lo contrario muestra un mensaje de error