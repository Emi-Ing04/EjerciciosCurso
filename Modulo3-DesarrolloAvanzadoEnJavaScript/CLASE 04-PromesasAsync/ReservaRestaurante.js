//SImulación de bases de datos de mesas
const mesasDisponibles = 5 // Número de mesas disponibles en el restaurante

// Función que simula la disponibilidad de mesas 
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            if (mesasSolicitadas <= mesasDisponibles) {
                resolve("Mesas confirmadas exitosamente");
            } else {
                reject("No hay suficientes mesas disponibles");
            }
        }, 2000); // Simula un retraso de 2 segundo
    });
}

