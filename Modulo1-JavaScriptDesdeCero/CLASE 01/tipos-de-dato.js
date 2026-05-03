//Introducción a JavaScript - Tipos de datos
console.log(typeof 42); //number
console.log(typeof "Veinticinco"); //string
console.log(typeof -666); //number
console.log(typeof true); //boolean
console.log(typeof 0); //number
console.log(typeof ''); //string
console.log(typeof null); //object (esto es un error en JavaScript, pero se mantiene por compatibilidad)
console.log(typeof undefined); //undefined
console.log(typeof FALSE); //undefined (esto es un error, debería ser boolean, pero se mantiene por compatibilidad)
console.log("--- Mis experimentos ---" )

//1. Un arreglo de camiones
console.log(typeof ["Volvo", "Scania", "Mercedes"]); //object (los arreglos son un tipo de objeto en JavaScript)
//2. Un objeto con información de un libro
console.log(typeof {titulo: "El Quijote", autor: "Miguel de Cervantes", año: 1605}); //object
//3. Not A Number (NaN)
console.log(typeof NaN); //number (NaN es un valor especial que representa un resultado no numérico, pero su tipo es number)
//4. Una función matemática 
console.log(typeof function() { return 42; }); //function
