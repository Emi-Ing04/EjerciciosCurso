//Ejercicios de grafos
// Ciudad de México, Guadalajara, Morelos, Puebla, Queretaro, Tuxtla, Hidalgo, Toluca, Orizaba

const grafo = {
    CDMX: ["Puebla", "Morelos","Queretaro", "Toluca"],
    Puebla: ["CDMX", "Orizaba", "Tuxtla"],
    Orizaba: ["Puebla", "Hidalgo"],
    Hidalgo: ["Orizaba", "Toluca"],
    Morelos: ["CDMX", "Tuxtla"],
    Queretaro: ["CDMX", "Toluca","Guadalajara"],
    Guadalajara: ["Queretaro", "Toluca"],
    Toluca: ["CDMX", "Hidalgo", "Queretaro", "Guadalajara"],
    Tuxtla: ["Puebla", "Morelos"]
};

console.log("Grafo de ciudades:");
console.log(grafo.CDMX);

//Creación de nuevo nodo a grafo

grafo.Aguascalientes = []
grafo.Aguascalientes.push("Queretaro", "Guadalajara");
grafo.Queretaro.push("Aguascalientes");
grafo.Guadalajara.push("Aguascalientes");

grafo.CDMX = grafo.CDMX.filter(ciudad => ciudad !== "Toluca") //El filter devuelve un nuevo arreglo sin el elemento que queremos eliminar, y lo asignamos de nuevo a la propiedad CDMX para actualizarla    
grafo.Hidalgo = grafo.Hidalgo.filter(ciudad => ciudad !== "Toluca")
console.log(grafo.CDMX.filter(ciudad => ciudad !== "Hidalgo"));

for(let ciudad in grafo) {
    console.log(ciudad,"->", grafo[ciudad]);
}

class Grafe {
    constructor() {
        this.nodos = {};
    }

    agregarNodo(nombre) {
        this.nodos[nombre] = [];
    }

    agregarConexiones(){
        this.nodos[origen].push(destino);
        this.nodos[destino].push(origen);
    }

    mostrar(){
        console.log(this.nodos);
    }

    hayConexion(ciudad1, ciudad2){
        return this.nodos[ciudad1].includes(ciudad2)
    }

    desconectar(ciudad1, ciudad2){
        this.nodos[ciudad1] = this.nodos[ciudad1].filter(ciudad => ciudad !== ciudad2);
        this.nodos[ciudad2] = this.nodos[ciudad2].filter(ciudad => ciudad !== ciudad1);
    }
}

const Mexico = new Grafe()
Mexico.agregarNodo("CDMX");
Mexico.agregarNodo("Puebla");
Mexico.agregarNodo("Orizaba");

Mexico.agregarConexiones("CDMX", "Puebla");
Mexico.agregarConexiones("Puebla", "Orizaba");

console.log(Mexico.hayConexion('CDMX', 'Puebla')); // true


console.log(Mexico.nodos);
Mexico.mostrar 
