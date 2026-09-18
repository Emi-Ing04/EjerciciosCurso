import './Tarjeta.css'; // Connect your new CSS file

// Add { nombre, profesion, mensaje } to receive the data as Props
function Tarjeta({ nombre, profesion, mensaje }) {
  return (
    <div className="card-container">
      <div className="profile-placeholder"></div>
      <h2 className="card-name">{nombre}</h2>
      <h4 className="card-profession">{profesion}</h4>
      <p className="card-description">{mensaje}</p>
    </div>
  );
}

export default Tarjeta;