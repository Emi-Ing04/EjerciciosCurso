import { Link } from 'react-router-dom';

// Datos simulados de una API para las citas médicas
const datosCitas = [
  { id: '1', paciente: "Juan Pérez", fecha: "2026-10-15", especialidad: "Cardiología", doctor: "Dr. Hernández", notas: "Traer electrocardiograma." },
  { id: '2', paciente: "María López", fecha: "2026-10-16", especialidad: "Dermatología", doctor: "Dra. Salas", notas: "Revisión de lunares." },
  { id: '3', paciente: "Carlos Ruiz", fecha: "2026-10-17", especialidad: "Medicina General", doctor: "Dr. Gómez", notas: "Consulta de primera vez." }
];

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