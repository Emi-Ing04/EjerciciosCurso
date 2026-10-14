import { Link } from 'react-router-dom';
import { datosCitas } from './datos';

function Citas() {
  return (
    <div className="page-container">
      <h2>Lista de Citas Programadas</h2>
      <div className="lista-citas">
        {datosCitas.map((cita) => (
          <div key={cita.id} className="tarjeta-cita">
            <h3>{cita.paciente}</h3>
            <p><strong>Fecha:</strong> {cita.fecha}</p>
            {/* Aquí generamos una URL dinámica dependiendo del ID */}
            <Link to={`/cita/${cita.id}`} className="btn-primario">
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Citas;