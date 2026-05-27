const motor = {
    tipo: "Trifásico",
    potencia: "2 HP",
    voltaje: 220
};

// Recorremos el objeto con FOR ... IN
for (let propiedad in motor) {
    // La variable "propiedad" va tomando el nombre de cada etiqueta
    console.log(`Etiqueta: ${propiedad} | Valor: ${motor[propiedad]}`);
}

let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

for (let propiedad in persona) {
  if (persona.hasOwnProperty(propiedad)) {
    console.log(propiedad + ": " + persona[propiedad]);
  }
}

//Ejemplos con FOR ... OF|

const refacciones = ["Balero", "Contactor", "Fusible", "Banda"];

// Recorremos la lista con FOR ... OF
for (let pieza of refacciones) {
    // La variable "pieza" toma el VALOR REAL directamente
    console.log(`Procesando pieza: ${pieza}`);
}

let numeros = [1, 2, 3, 4];

let cuadrados = numeros.map( numero => numero*numero);

console.log(cuadrados);  // Salida: [1, 4, 9, 16]

//Ejemplo: Uso de let, const y funciones flecha

const calculateArea = (width, height) => (width * height);
console.log(`El área del rectángulo es: ${calculateArea(5, 10)}`);

// Ejercicio práctico: Trabajando con Promesas y async/await

const fetchUserData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });  // Objeto que simula datos de usuario
    }, 2000);
  });
};

const getUser = async () => {

  const userData = await fetchUserData();  // Espera a que se resuelva la promesa

  console.log(userData);  // Muestra el resultado en consola

};

getUser();

// CLASES CON ES6 EN JAVASCRIPT

class Producto{
  //Se define el constructor para inicializar las propiedades del producto
  constructor(nombre, precio){
    this.nombre = nombre; 
    this.precio = precio;
  }
  //Método para mostrar la información del producto
  mostrarInfo(){
    return `Producto: ${this.nombre}, Precio: $${this.precio}`;
  }
}

// Crear una instancia de la clase Producto
const producto1 = new Producto("Laptop", 1500);
console.log(producto1.mostrarInfo());  // Salida: Producto: Laptop, Precio: $1500


// Problema: En un sistema de inventario de una tienda en línea, se necesita crear una clase Producto que almacene el nombre, precio y cantidad de un artículo. Además, se debe incluir un método actualizarStock que aumente o disminuya la cantidad de productos disponibles.
class ProductoInventario {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  obtenerInfo() {
    return `Producto: ${this.nombre}, Precio: $${this.precio}, Cantidad: ${this.cantidad}`;
  }
  actualizarStock(cantidad) {
    this.cantidad += cantidad;
  }
} 
// Crear una instancia de la clase ProductoInventario
const producto2 = new ProductoInventario("Smartphone", 800, 50);
producto2.actualizarStock(-20); // Disminuye el stock en 20 unidades
console.log(producto2.obtenerInfo()); // Salida: Producto: Smartphone, Precio: $800, Cantidad: 30
console.log(`Antes de actualizar el stock: ${producto2.cantidad} unidades`); // Salida: Antes de actualizar el stock: 50 unidades