//Se importa las funciones necesarias desde el modulo especializado
import {registrarDestino, mostrarItinerario} from './viajes.js';

// Función flecha principal para iniciar la aplicación
const iniciarApp = () => {
    // Registro de destinos de prueba utilizando el estándar modular
    registrarDestino("Paris", "2026-06-15", "Avión");
    registrarDestino("Londres", "2026-07-20", "Tren");
    registrarDestino("Nueva York", "2026-08-10", "Avión");

    //Se ejecuta la impresión del itinerario moderno
    mostrarItinerario();
};

// Se ejecuta la aplicación de forma limpia
iniciarApp();
