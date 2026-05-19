// 1. Conectamos los elementos del DOM
let pantallaResultado = document.getElementById('resultado');
let botonGenerar = document.getElementById('btnGenerar');

// 2. Definimos todos los caracteres posibles
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+~|}{[]:;?><,./-=";

// Juntamos todo en una sola gran cadena de texto
const todosLosCaracteres = letrasMinusculas + letrasMayusculas + numeros + simbolos;

// 3. Creamos la máquina generadora
function generarPassword() {
    let passwordFinal = "";
    let longitudPassword = 12; // Más de 8 caracteres por seguridad

    // Un bucle (loop) que se repite 12 veces
    for (let i = 0; i < longitudPassword; i++) {
        // Elegimos un número al azar entre 0 y el total de caracteres disponibles
        let numeroAlAzar = Math.floor(Math.random() * todosLosCaracteres.length);
        
        // Tomamos el carácter que está en esa posición y lo pegamos a la contraseña
        passwordFinal += todosLosCaracteres.charAt(numeroAlAzar);
    }

    // 4. Inyectamos la contraseña terminada en la pantalla usando DOM
    pantallaResultado.textContent = passwordFinal;
}

// 5. Escuchamos el evento de clic en el botón para activar la máquina
botonGenerar.addEventListener('click', generarPassword);