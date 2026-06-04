// 1. Arreglo vacío para la lista de compras
let listaDeCompras = [];
// 2. Función flecha para agregar un producto a la lista con control de duplicados
export const agregarProducto = (producto) => {
    //Se crea un Set temporal para verificar con lo que ya hay en la lista más el nuevo producto
    const conjuntoTemporal = new Set ([...listaDeCompras, producto]);
    //Si el tamaño del conjunto es igual al del arreglo, significa que el producto ya existía
    if (conjuntoTemporal.size === listaDeCompras.length) {
        console.log("El producto ya existe en la lista.");
        return;
    }
    listaDeCompras.push(producto);
    console.log("Producto agregado a la lista.");
};

// 3. Función flecha para eliinr cualquier producto usando filter
export const eliminarProducto = (producto) => {
    const longitudInicial = listaDeCompras.length;

    //Se filtra el arreglo: se queda con todos los productos MENOS el que se quiere borrar
    listaDeCompras = listaDeCompras.filter(item => item.toLowerCase() !== producto.toLowerCase());
    console.log("Producto eliminado de la lista.");

if (listaDeCompras.length === longitudInicial){
    console.log("El producto no se encontró en la lista.");
} else {
    console.log("Producto eliminado de la lista.");
}

};

// 4. Función flecha para renderizar la lista completa en el HTML (Manipulación del DOM)
export const mostrarLista = () => {
    const contenedor = document.getElementById("lista-productos");

    //Limpiamos pantalla
    contenedor.innerHTML = "";

    //Si la lista está vacía, se muestra un aviso
    if (listaDeCompras.length === 0) {
        contenedor.innerHTML = "<li>La lista está vacía.</li>";
        return;
    }

    //Se recorre con forEach para inyectar las etiquetas <li> con cada producto
    listaDeCompras.forEach(producto => {
        contenedor.innerHTML += `<li>🛒 ${producto}</li>`;
    });
};
