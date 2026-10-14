import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Citas from './pages/Citas';
import CitaDetalle from './pages/CitaDetalle';
import NotFound from './pages/NotFound';
import './App.css'; // Importamos el archivo CSS para los estilos globales

function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegación que estará presente en todas las páginas */}
      <nav className="barra-navegacion">
        <div className="logo">🏥 MediClinic</div>
        <div className="enlaces">
          <Link to="/">Inicio</Link>
          <Link to="/citas">Ver Citas</Link>
        </div>
      </nav>

      {/* Se definen las rutas de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        
        {/* El asterisco (*) atrapa cualquier ruta que no coincida con las anteriores */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;