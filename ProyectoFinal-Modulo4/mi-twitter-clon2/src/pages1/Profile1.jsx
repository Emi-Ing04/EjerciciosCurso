const Profile1 = ({ user }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Perfil de Usuario</h1>
      {/* Se muestra el nombre dinámicamente */}
      {user && <h2>@{user.username}</h2>}
      <p>Bienvenido a tu espacio personal. Aquí aparecerá tu biografía y configuración en el futuro.</p>
    </div>
  );
};

export default Profile1;