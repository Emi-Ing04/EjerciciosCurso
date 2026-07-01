// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
  // TODO: Incluye el caso base donde se encuentra el regalo.
  if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }
  // TODO: Realiza la llamada recursiva para seguir buscando el regalo.
  return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
let giftToFind = "Muñeca";
console.log(findGift(gifts, giftToFind));

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));