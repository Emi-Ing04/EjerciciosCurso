import { useParams, Link } from 'react-router-dom';
import { datosCitas } from './Citas'; // Se importala lista simulada

function CitaDetalle() {
  //Se extrae el ID dinámico de la URL
  const { id } = useParams();

  // Se busca en el arreglo el paciente que coincida con ese ID
  const citaEncontrada = datosCitas.find((cita) => cita.id === id);

  // Renderizado condicional en caso de que alguien escriba un ID que no existe
  if (!citaEncontrada) {
    return (
      <div className="page-container text-center">
        <h2>Cita no encontrada</h2>
        <p>No existe ninguna cita con el número de folio {id}.</p>
        <Link to="/citas" className="btn-secundario">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Expediente de Cita #{id}</h2>
      <div className="tarjeta-detalle">
        <p><strong>Paciente:</strong> {citaEncontrada.paciente}</p>
        <p><strong>Fecha:</strong> {citaEncontrada.fecha}</p>
        <p><strong>Especialidad:</strong> {citaEncontrada.especialidad}</p>
        <p><strong>Médico Asignado:</strong> {citaEncontrada.doctor}</p>
        <p><strong>Notas Clínicas:</strong> {citaEncontrada.notas}</p>
      </div>
      <br />
      <Link to="/citas" className="btn-secundario">← Regresar a todas las citas</Link>
    </div>
  );
}

export default CitaDetalle;