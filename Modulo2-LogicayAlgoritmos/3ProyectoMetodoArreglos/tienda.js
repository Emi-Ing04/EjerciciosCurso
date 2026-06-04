// 1. Arreglo inicial con al menos 5 productos (Objetos)
const inventario = [
    { nombre: "Camiseta", precio: 25, categoria: "Ropa" },
    { nombre: "Zapatos", precio: 120, categoria: "Calzado" },
    { nombre: "Pantalón", precio: 45, categoria: "Ropa" },
    { nombre: "Audífonos", precio: 85, categoria: "Electrónica" },
    { nombre: "Reloj Inteligente", precio: 150, categoria: "Electrónica" },
    { nombre: "Gorra", precio: 15, categoria: "Accesorios" }
];

export const procesarProductos = () => {
    console.log("📦 INVENTARIO BASE:");
    console.log(inventario);
    console.log("--------------------------------------------------\n");

    // 2. Uso de filter() para obtener productos menores a $100
    const productosEconomicos = inventario.filter(producto => producto.precio < 100);
    console.log("🔍 1. Productos con precio menor a $100 (filter):");
    console.log(productosEconomicos);
    console.log("--------------------------------------------------\n");

    // 3. Uso de sort() para ordenar alfabéticamente por nombre
    // Usamos localeCompare() para que ordene correctamente acentos y eñes
    const productosOrdenados = [...productosEconomicos].sort((a, b) => {
        return a.nombre.localeCompare(b.nombre);
    });
    console.log("📐 2. Productos ordenados alfabéticamente (sort):");
    console.log(productosOrdenados);
    console.log("--------------------------------------------------\n");

    // 4. Uso de map() para extraer únicamente los nombres
    const nombresProductos = productosOrdenados.map(producto => producto.nombre);
    console.log("📋 3. Solo nombres de productos procesados (map):");
    console.log(nombresProductos);
    console.log("--------------------------------------------------\n");

    // 5. (Opcional Extra) Uso de reduce() para calcular el costo total de los productos filtrados
    const costoTotalFiltrado = productosOrdenados.reduce((acumulador, producto) => {
        return acumulador + producto.precio;
    }, 0);
    
    console.log(`💰 4. Caso de Uso Extra (reduce):`);
    console.log(`El valor total de los productos económicos ordenados es: $${costoTotalFiltrado} USD`);
    
    return { nombresProductos, costoTotalFiltrado };
};