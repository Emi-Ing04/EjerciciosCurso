import Tarjeta from './Tarjeta';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Tarjetas del Equipo</h1>
      
      <div className="cards-wrapper">
        {/* Pass the data here. Using an initial or alias is a great way to protect your privacy online */}
        <Tarjeta 
          nombre="E. Guzmán" 
          profesion="Ingeniero Mecánico" 
          mensaje="Especialista en mantenimiento y proyectos industriales." 
        />
        
        {/* You can reuse the exact same component for someone else */}
        <Tarjeta 
          nombre="Ana Pérez" 
          profesion="Desarrolladora Web" 
          mensaje="¡Bienvenido a mi tarjeta de presentación!" 
        />
      </div>
    </div>
  );
}

export default App;