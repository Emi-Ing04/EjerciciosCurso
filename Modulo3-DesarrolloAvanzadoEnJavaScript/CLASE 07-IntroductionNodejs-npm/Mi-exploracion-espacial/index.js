const planetas = require('./planetas');
const cowsay = require('cowsay'); // Import the downloaded package

planetas.forEach(planeta => {
  // Create a single text block using the \n symbol to create line breaks
  const mensaje = `¡Planeta ${planeta.nombre} descubierto!\nDescripción: ${planeta.descripcion}\nAño: ${planeta.descubiertoEn}\nFoto: ${planeta.imagenUrl}`;

  // Print the message inside the cow graphic
  console.log(cowsay.say({
    text: mensaje,
    e: "oO", // Custom eyes
    T: "U "  // Custom tongue
  }));
});