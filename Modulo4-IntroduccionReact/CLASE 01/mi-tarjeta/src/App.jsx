import Tarjeta from './Tarjeta';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Tarjetas del Equipo</h1>
      
      <div className="cards-wrapper">
        {/* Pass the data here. Using an initial or alias is a great way to protect your privacy online */}
        <Tarjeta 
          nombre="Emilio Guzmán" 
          profesion="Ingeniero Mecánico" 
          mensaje="Especialista en mantenimiento y proyectos industriales." 
        />
      </div>
    </div>
  );
}

export default App;