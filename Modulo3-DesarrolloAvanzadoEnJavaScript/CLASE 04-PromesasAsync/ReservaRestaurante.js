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

// Función que simula el envío de un correo de onfirmación 
function enviarCorreoConfirmacion(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const probabilidadExito = Math.random(); // Genera un número aleatorio entre 0 y 1
            if (probabilidadExito < 0.3) { // 70% de probabilidad de éxito
                resolve(`Correo de confirmación enviado a ${nombreCliente}`);
            } else {
                reject("Error al enviar el correo de confirmación");
            }
        }, 1500); // Simula un retraso de 1.5 segundos
    });
}

//Función principal para manejar una reserva
async function realizarReserva(nombreCliente, mesasSolicitadas) {
    try {
        console.log(`Verificando disponibilidad de mesas para ${nombreCliente}...`);
        // Se espera a que el sistema valide las mesas 
        const msjdisponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        console.log("Paso 1 completado:", msjdisponibilidad);

        // Solo si el paso 1 tuvo éxito, se procede a enviar el correo de confirmación
        const msjCorreo = await enviarCorreoConfirmacion(nombreCliente);
        console.log("Paso 2 completado:", msjCorreo);

        console.log("PROCESO TERMINADO: Reserva realizada con éxito para", nombreCliente);

    } catch (error) {
        console.error("Error al realizar la reserva:", error);
    }
}


// Ejemplo de uso
realizarReserva("Juan Pérez", 3); // Este caso debería funcionar correctamente

realizarReserva("María López", 6); // Este caso debería fallar por falta de mesas