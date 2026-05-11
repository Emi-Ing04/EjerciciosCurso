//Se crea un objeto con la informacion del libro//
let libro1 = {
    //PROPIEDADES - datos estáticos o especificaciones técnicas
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    anio: 1954,
    estado: "disponible",

    // Se inserta un arreglo para guardar los capitulos del libro//
    capitulos: [],

    //METODOS - acciones o comportamientos que el objeto puede realizar

    //Método 1: Imprimir la descripción del libro
    describirLibro: function() {
        console.log("Libro titulado '" + this.titulo + "' escrito por " + this.autor + " en el año " + this.anio + ". Estado: " + this.estado);
    },

    //Método 2: Agregar un capítulo al libro
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log("Se agregó el capítulo:" + capitulo);
    },

    //Método 3: Eliminar el último capítulo
    eliminarCapitulo: function() {
        let capituloEliminado = this.capitulos.pop();
        console.log("Se eliminó el capítulo: " + capituloEliminado);
    }
};  


//Uso de los métodos del objeto libro1

//Método 1: Imprimir la descripción del libro
libro1.describirLibro();
//Método 2. Agregar capítulos al libro
libro1.agregarCapitulo(" Capítulo 1: La Comunidad del Anillo");
libro1.agregarCapitulo(" Capítulo 2: Las Dos Torres");
libro1.agregarCapitulo(" Capítulo 3: El Retorno del Rey");
//Se imprime el arreglo para verificar los capítulos agregados
console.log("Capítulos del libro:", libro1.capitulos);
//Método 3: Eliminar el último capítulo
libro1.eliminarCapitulo();
//Se imprime el arreglo para verificar el capítulo eliminado
console.log("Capítulos del libro después de eliminar el último:", libro1.capitulos);

