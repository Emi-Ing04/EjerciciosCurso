// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos
function leerDatos(callback) {
    setTimeout(() => {
        // Se simula leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros(callback) {
    leerDatos((datos) => {
        console.log("\n--- Inventario de libros ---");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
        
        if (callback) callback(); 
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible, callback) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    
    setTimeout(() => {
        // Usamos .push() para insertar el nuevo objeto al final del arreglo
        biblioteca.libros.push(nuevoLibro);
        console.log(`\n[Éxito] El libro "${titulo}" ha sido agregado.`);
        
        if (callback) callback(); // Se avisa que ya se terminó de escribir
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado, callback) {
    setTimeout(() => {
        // Se usa .find() para buscar en el arreglo el libro que coincida con el título
        const libroEncontrado = biblioteca.libros.find(libro => libro.titulo === titulo);
        
        if (libroEncontrado) {
            libroEncontrado.disponible = nuevoEstado; // Actualizamos la propiedad
            console.log(`\n[Actualización] El estado de "${titulo}" ha cambiado.`);
        } else {
            console.log(`\n[Error] Libro no encontrado.`);
        }
        
        if (callback) callback(); // Se avisa que ya se terminó de actualizar
    }, 1000);
}

// ==========================================
// EJECUCIÓN (The Execution Flow)
// ==========================================

console.log("Iniciando sistema de biblioteca...\n");

// Se usa Callbacks para forzar una secuencia lógica:
// 1. Mostrar iniciales -> 2. Agregar -> 3. Actualizar -> 4. Mostrar resultado final

mostrarLibros(() => {
    
    // Este código solo corre cuando mostrarLibros termina
    agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true, () => {
        
        // Este código solo corre cuando agregarLibro termina
        actualizarDisponibilidad("1984", false, () => {
            
            // Finalmente, se muestra el cambio en el inventario
            mostrarLibros();
            
        });
    });
});