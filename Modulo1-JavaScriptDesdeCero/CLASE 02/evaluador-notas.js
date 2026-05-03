// Declaración de variables
let nota = 85;
// Verificación que la nota sea mayor a 0 (truthy)
if (nota > 0) {
    //Se imprime la nota obtenida
    console.log("El estudiante obtuvo una nota de: " + nota);
    // Estructura condicional para evaluar la nota
    if (nota >= 90) {
        console.log("¡Excelente!");
    }
    else if (nota <= 89 && nota >= 75) {
        console.log("¡Bien!");
    }
    else if (nota <= 74 && nota >= 60) {
        console.log("¡Suficiente!");
    }
    else {
        console.log("¡No se aprueba!");
    }
}
else {
    console.log("La nota debe ser un número positivo.");
}