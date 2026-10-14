import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-container text-center">
      <h1 style={{ fontSize: '4rem', color: '#e74c3c' }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Parece que te has perdido en los pasillos de la clínica.</p>
      <Link to="/" className="btn-primario">Volver a Recepción</Link>
    </div>
  );
}

export default NotFound;