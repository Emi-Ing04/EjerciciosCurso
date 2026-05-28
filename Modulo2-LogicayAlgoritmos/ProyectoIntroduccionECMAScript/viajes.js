//Array constante para guardar los destinos 
const destinos = [];

//Función flecha para calcular el costo del viaje (operación interna)
const calcularCosto = (destino, transporte) => {
    let costoBase = 0; //Se usa let porque el costo cambia durante el proceso

    //Costo base por destino
    if (destino === "Paris") {costoBase = 500;
    } else if (destino === "Londres") {costoBase = 400;
    } else if (destino === "Nueva York") {costoBase = 600;
    }

    // Costo adicional por transporte
    if (transporte === "Avión") {costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;   
    }
    return costoBase;
}

//Función flecha exportada para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    // Se crea un objeto utilizando sintaxis de ES6
    const nuevoViaje = {
        destino, // Equivale a destino: destino
        fecha,    // Equivale a fecha: fecha
        transporte, // Equivale a transporte: transporte
        costo: calcularCosto(destino, transporte) // Se calcula el costo usando la función interna
    };
    destinos.push(nuevoViaje); // Se agrega el nuevo viaje al array de destinos
    };

    // Función flecha exportada para mostrar itinerario usando Foreach
export const mostrarItinerario = () => {
    // Se obtiene el contenedor del DOM para mostrar los viajes
    const contendor = document.getElementById("lista-viajes");
    
    contenedor.innerHTML = ""; // Limpiamos el contenedor antes de mostrar el itinerario


    console.log("✈️  --- ITINERARIO DE VIAJES PLANIFICADOS --- ✈️\n");

    // Automatización del recorrido con forEach para mostrar cada destino registrado
    destinos.forEach(viaje => {
       
        contenedor.innerHTML += `
            <div class="tarjeta-viaje">
                <h3>✈️ Destino: ${viaje.destino}</h3>
                <p><strong>📅 Fecha:</strong> ${viaje.fecha}</p>
                <p><strong>🚂 Transporte:</strong> ${viaje.transporte}</p>
                <p><strong>💰 Costo Total:</strong> $${viaje.costo} USD</p>
            </div>
        `; // Se agrega cada viaje al contenedor del DOM

    });
};
