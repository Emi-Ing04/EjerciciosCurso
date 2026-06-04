//Set Nativo

let usuariosActivos = new Set();
usuariosActivos.add("Emi");
usuariosActivos.add("Juan");
usuariosActivos.add("Ana"); // 
usuariosActivos.add("Emi"); // JavaScript lo ignora automáticamente 

console.log(usuariosActivos); // Set(3) {"Emi", "Juan", "Ana"}

//Arreglo de Objetos o Map para un Bag
// Una estructura real para un carrito (Permite el mismo producto con su cantidad)
let carritoReal = [
    { producto: "Zapatos", cantidad: 2 },
    { producto: "Camiseta", cantidad: 1 }
];

console.log(carritoReal); 
// Salida ordenada: Puedes ver perfectamente que el usuario lleva 2 zapatos.
// Una estructura real para un carrito (Permite el mismo producto con su cantidad)
let carritoReal = [
    { producto: "Zapatos", cantidad: 2 },
    { producto: "Camiseta", cantidad: 1 }
];

console.log(carritoReal);

