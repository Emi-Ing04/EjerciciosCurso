const listasNom = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function Parejas(arr){
    let inicio =0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        if(arr[inicio][0] === arr[siguiente][0]){
         return [arr[inicio], arr[siguiente]];
        }
        else {
            inicio++;
            siguiente++;
        }
    }
    return null;
}

// Tienes tres listas de invitados completamente diferentes
const boda = ["Ana", "Carlos", "Cecilia", "Daniel"];
const graduacion = ["Beto", "Bruno", "Carmen", "Diana"];
const cenaFamiliar = ["Elena", "Ernesto", "Fernando"];

// Puedes usar exactamente la misma función para todas
console.log(Parejas(boda)); 
// La función internamente dice: Ah, arr es la lista "boda".
// Resultado: ["Carlos", "Cecilia"]

console.log(Parejas(graduacion)); 
// La función internamente dice: Ahora arr es la lista "graduacion".
// Resultado: ["Beto", "Bruno"]

console.log(Parejas(cenaFamiliar)); 
// Resultado: ["Elena", "Ernesto"]

console.log(Parejas(listasNom));