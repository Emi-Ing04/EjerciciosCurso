import { useState } from 'react';

function InputNumber({ onAdivinar, deshabilitado }) {
  const [valor, setValor] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (valor.trim() !== '') {
      onAdivinar(parseInt(valor));
      setValor(''); // Limpiamos el input después de adivinar
    }
  };

  return (
    <form className="formulario-juego" onSubmit={manejarEnvio}>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Ingresa un número..."
        disabled={deshabilitado}
        min="1"
        max="100"
        required
      />
      <button type="submit" disabled={deshabilitado}>
        Adivinar
      </button>
    </form>
  );
}

export default InputNumber;