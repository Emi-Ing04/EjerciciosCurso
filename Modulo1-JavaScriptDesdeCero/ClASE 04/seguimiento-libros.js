let librosLeidos = [];
function agregarLibro(libro) {
    librosLeidos.push(libro);
    console.log("Libro agregado: " + libro);
    console.log("Libros leídos hasta ahora: " + librosLeidos.join(", "));
}

function mostrarLibros() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log("- " + librosLeidos[i]);
    }
}

//Se manda a llamar las funciones//
agregarLibro("Cien años de soledad");
agregarLibro("Don Quijote de la Mancha");
agregarLibro("El amor en los tiempos del cólera");
mostrarLibros();