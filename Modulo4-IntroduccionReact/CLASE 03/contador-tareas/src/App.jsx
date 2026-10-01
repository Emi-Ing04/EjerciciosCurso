import { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {
  // 1. Estado con Persistencia (localStorage)
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('mis_tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [filtro, setFiltro] = useState('todas'); // Estado para el filtro

  // Guardar en localStorage cada vez que cambien las tareas
  useEffect(() => {
    localStorage.setItem('mis_tareas', JSON.stringify(tareas));
  }, [tareas]);

  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  // Actualizar el título del documento
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]);

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea.trim(),
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  // Lógica de filtrado de tareas
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'cortas') return tarea.duracion < 30; // Menos de 30 mins
    if (filtro === 'largas') return tarea.duracion >= 30; // 30 mins o más
    return true; // 'todas'
  });

  return (
    <div className="app-container">
      <h1>Contador de Tareas</h1>
      
      <div className="form-group">
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Nombre de la tarea" 
        />
        <input 
          type="number" 
          value={duracion} 
          onChange={(e) => setDuracion(e.target.value)} 
          placeholder="Minutos" 
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      {/* Selector de Filtro */}
      <div style={{ marginBottom: "20px" }}>
        <label>Filtrar por duración: </label>
        value={filtro} onChange={(e) => setFiltro(e.target.value)}
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="todas">Todas</option>
          <option value="cortas">Cortas (&lt; 30 min)</option>
          <option value="largas">Largas (&ge; 30 min)</option>
        </select>
      </div>

      <h2>Lista de Tareas</h2>
      <ul>
        {tareasFiltradas.map((tarea, index) => (
          <li key={index}>
            {tarea.nombre}: <strong>{tarea.duracion} minutos</strong>
          </li>
        ))}
      </ul>

      <h3>Total de tiempo filtrado: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;