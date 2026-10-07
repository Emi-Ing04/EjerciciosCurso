import { useState } from 'react';
import CounterGame from './CounterGame';
import InventoryManager from './InventoryManager';

function App() {
  // Estado para saber cuál de los dos talleres mostrar
  const [proyectoActivo, setProyectoActivo] = useState('contador');

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Taller: Hooks Avanzados</h1>

      {/* Menú de navegación */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <button 
          onClick={() => setProyectoActivo('contador')}
          style={{ fontWeight: proyectoActivo === 'contador' ? 'bold' : 'normal' }}
        >
          🎮 Juego de Contador
        </button>
        <button 
          onClick={() => setProyectoActivo('inventario')}
          style={{ fontWeight: proyectoActivo === 'inventario' ? 'bold' : 'normal' }}
        >
          📦 Gestor de Inventario
        </button>
      </div>

      {/* Renderización Condicional: si es 'contador' dibuja uno, si no, el otro */}
      {proyectoActivo === 'contador' ? <CounterGame /> : <InventoryManager />}
    </div>
  );
}

export default App;