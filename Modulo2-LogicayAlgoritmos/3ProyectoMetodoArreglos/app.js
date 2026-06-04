import { procesarProductos } from './tienda.js';

const iniciarApp = () => {
    console.log("🚀 --- PROCESAMIENTO DE TIENDA ONLINE --- 🚀\n");
    
    // Ejecutamos la lógica y capturamos los resultados para la interfaz
    const { nombresProductos } = procesarProductos();

    // Renderizamos el resultado final en el HTML para mantener el extra visual
    const contenedor = document.getElementById("lista-nombres");
    contenedor.innerHTML = "";
    
    nombresProductos.forEach(nombre => {
        contenedor.innerHTML += `<li>🏷️ ${nombre}</li>`;
    });
};

iniciarApp();

