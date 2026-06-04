import { agregarProducto, eliminarProducto, mostrarLista } from './lista.js';

const iniciarApp = () => {
    console.log("🚀 --- INICIANDO CONTROL DE LISTA DE COMPRAS --- 🚀\n");

    // ---Prueba 1: Agregar productos normalmente ---
    agregarProducto("Zapatos");
    agregarProducto("Camisa");
    agregarProducto("Pantalones");
    
    // ---Prueba 2: Intentar agregar un duplicado (El sistema debe bloquearlo) ---
    agregarProducto("Camiseta"); 

    // --- PRUEBA 3: Eliminar un producto específico ---
    eliminarProducto("Zapatos");

    // --- PRUEBA 4: Renderizar el resultado final ---
    mostrarLista();
};

// Arrancamos el proceso
iniciarApp();
