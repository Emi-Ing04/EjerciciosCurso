import './style.css';

// 1. Cambio de 'const' a 'let' porque necesitamos actualizar estos valores cuando el juego se reinicia
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let contadorIntentos = 0;

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');

// 2. Captura de los elementos para mostrar el contador de intentos y el botón de reinicio
const displayIntentos = document.getElementById('intentos');
const botonReiniciar = document.getElementById('reiniciar');

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);
    
    // Adición de 1 a el contador cada vez que se hace clic en el botón y se muestra
    contadorIntentos++; 
    displayIntentos.textContent = `Intentos: ${contadorIntentos}`;

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        mensaje.style.color = 'red'; // Cambiar el color del texto a rojo para indicar error
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
        mensaje.style.color = 'green'; // Cambiar el color del texto a verde
        
        // 3. GAME OVER LOGIC: Bloqueo del input y botón, y mostrar el botón de reinicio
        botonAdivinar.disabled = true;
        inputNumero.disabled = true;
        botonReiniciar.style.display = 'block'; 
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
        mensaje.style.color = 'orange'; // Cambiar el color del texto a naranja para indicar advertencia
    } else {
        mensaje.textContent = 'El número es más bajo.';
        mensaje.style.color = 'orange';
    }
});

// 4. RESET LOGIC:Que se ejecuta cuando el jugador hace clic en el botón de reinicio?
botonReiniciar.addEventListener('click', () => {
    // Generar un nuevo número secreto y reiniciar el contador de intentos
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    contadorIntentos = 0;
    
    // Actualizar la interfaz de usuario para reflejar el reinicio
    displayIntentos.textContent = `Intentos: ${contadorIntentos}`;
    mensaje.textContent = '';
    inputNumero.value = '';
    
    // Habilitar el input y el botón de adivinar nuevamente, y ocultar el botón de reinicio
    botonAdivinar.disabled = false;
    inputNumero.disabled = false;
    botonReiniciar.style.display = 'none';
});