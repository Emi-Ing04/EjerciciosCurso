import { useState, useEffect, useRef } from 'react';
import './App.css'; // Se importamos el tema espacial

function App() {
  // 1. Estado inicializado de forma diferida (lazy initialization) para localStorage
  const [planetas, setPlanetas] = useState(() => {
    const guardados = localStorage.getItem('planetas');
    return guardados ? JSON.parse(guardados) : [];
  });

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  
  // Referencia para manipular el input de archivo directamente en el DOM
  const inputImagenRef = useRef(null);

  // 2. Efecto de Actualización: Guardar en localStorage cada que 'planetas' cambie
  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(planetas));
  }, [planetas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPlaneta = {
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      // URL.createObjectURL crea un enlace temporal en la memoria del navegador para la imagen
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    };

    setPlanetas([...planetas, nuevoPlaneta]);
    
    // Limpiar el formulario
    setNombre('');
    setDescripcion('');
    setImagen(null);

    // Limpiar el input tipo 'file' usando la referencia
    if (inputImagenRef.current) {
      inputImagenRef.current.value = ''; 
    }
  };

  const handleDelete = (index) => {
    const nuevosPlanetas = planetas.filter((_, i) => i !== index);
    setPlanetas(nuevosPlanetas);
  };

  return (
    <div className="bitacora-container">
      <h1 className="titulo">Bitácora de Exploración</h1>

      <form className="formulario-espacial" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Nombre del planeta (ej. Kepler-186f)"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <textarea
          className="input-textarea"
          placeholder="Descripción geológica o atmosférica..."
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          className="input-file"
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
          ref={inputImagenRef} // Conectamos el hook useRef aquí
        />
        <button className="btn-guardar" type="submit">Registrar Planeta</button>
      </form>

      <ul className="lista-planetas">
        {planetas.map((planeta, index) => (
          <li className="tarjeta-planeta" key={index}>
            <h3>{planeta.nombre}</h3>
            <p>{planeta.descripcion}</p>
            {planeta.imagen && (
              <img 
                className="imagen-planeta" 
                src={planeta.imagen} 
                alt={`Superficie de ${planeta.nombre}`} 
              />
            )}
            <button className="btn-eliminar" onClick={() => handleDelete(index)}>
              Eliminar Registro
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;