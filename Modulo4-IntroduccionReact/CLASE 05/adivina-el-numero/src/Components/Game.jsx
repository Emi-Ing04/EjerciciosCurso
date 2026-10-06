import { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

// Función auxiliar para generar el número aleatorio
const generarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroAleatorio());
  const [intentos, setIntentos] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState(''); // 'pista' o 'exito'
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const evaluarIntento = (numeroIngresado) => {
    setIntentos(intentos + 1);

    if (numeroIngresado === numeroSecreto) {
      setMensaje(`¡Correcto! Adivinaste en ${intentos + 1} intentos.`);
      setTipoMensaje('exito');
      setJuegoTerminado(true);
    } else if (numeroIngresado < numeroSecreto) {
      setMensaje('El número es mayor 🔼');
      setTipoMensaje('pista');
    } else {
      setMensaje('El número es menor 🔽');
      setTipoMensaje('pista');
    }
  };

  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumeroAleatorio());
    setIntentos(0);
    setMensaje('');
    setTipoMensaje('');
    setJuegoTerminado(false);
  };

  return (
    <div className="juego-contenedor">
      <h2>Adivina el Número (1 - 100)</h2>
      <p>Intentos actuales: <strong>{intentos}</strong></p>

      {/* Composición de componentes */}
      <InputNumber onAdivinar={evaluarIntento} deshabilitado={juegoTerminado} />
      
      <Message texto={mensaje} tipo={tipoMensaje} />

      {/* Renderización condicional: El botón solo aparece si el juego terminó */}
      {juegoTerminado && <RestartButton onReset={reiniciarJuego} />}
    </div>
  );
}

export default Game;