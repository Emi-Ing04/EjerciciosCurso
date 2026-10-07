import { useReducer, useRef, useCallback, useEffect, useState } from "react";

// Función para inicializar el estado leyendo de localStorage 
const init = () => {
  const guardado = localStorage.getItem('contadorEstado');
  return guardado ? JSON.parse(guardado) : { count: 0, history: [], previousCounts: [] };
};

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      // Si no hay un valor, por defecto suma 1 
      const valorIncremento = action.payload || 1;
      return {
        count: state.count + valorIncremento,
        history: [...state.history, `+${valorIncremento} (Nuevo valor: ${state.count + valorIncremento})`],
        previousCounts: [...state.previousCounts, state.count] // Guardamos el paso anterior (Ejercicio 1)
      };
    }
    case "decrement": {
      return {
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`],
        previousCounts: [...state.previousCounts, state.count]
      };
    }
    case "undo": {
      // Ejercicio 1: Lógica para deshacer 
      if (state.history.length === 0) return state;
      const ultimoValor = state.previousCounts[state.previousCounts.length - 1];
      return {
        count: ultimoValor, // Regresamos al número anterior
        history: state.history.slice(0, -1), // Se borra la última nota del historial
        previousCounts: state.previousCounts.slice(0, -1) // Se borra el último paso
      };
    }
    case "reset":
      return { count: 0, history: [], previousCounts: [] };
    default:
      return state;
  }
}

export default function CounterGame() {
  // Pasamos 'init' como tercer parámetro para leer el localStorage
  const [state, dispatch] = useReducer(reducer, null, init);
  const incrementBtnRef = useRef(null);
  
  // Estado para el campo de entrada del Ejercicio 2
  const [valorPersonalizado, setValorPersonalizado] = useState(1); 

  // Ejercicio 3: Guardar el historial en localStorage cada que cambie el estado
  useEffect(() => {
    localStorage.setItem('contadorEstado', JSON.stringify(state));
  }, [state]);

  // Enfocar el botón al montar
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  // Optimizaciones con useCallback
  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment", payload: 1 });
  }, []);

  const handleIncrementCustom = useCallback(() => {
    dispatch({ type: "increment", payload: parseInt(valorPersonalizado) || 0 });
  }, [valorPersonalizado]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleUndo = useCallback(() => { // Ejercicio 1
    dispatch({ type: "undo" });
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #3498db', borderRadius: '8px', margin: '20px 0' }}>
      <h2>Contador Interactivo</h2>
      <h3>Valor actual: {state.count}</h3>

      <div style={{ marginBottom: '15px' }}>
        <button ref={incrementBtnRef} onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement} style={{ margin: '0 5px' }}>-1</button>
        <button onClick={handleUndo} disabled={state.history.length === 0}>Deshacer</button>
        <button onClick={() => dispatch({ type: "reset" })} style={{ marginLeft: '5px' }}>Reset</button>
      </div>

      {/* Ejercicio 2: Input para incrementar por valor específico */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="number"
          value={valorPersonalizado}
          onChange={(e) => setValorPersonalizado(e.target.value)}
          placeholder="Ej. 5"
        />
        <button onClick={handleIncrementCustom}>Sumar este número</button>
      </div>

      <h4>Historial de cambios:</h4>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}