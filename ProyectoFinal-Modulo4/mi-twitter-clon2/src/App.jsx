import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home1 from "./pages/Home1";
import Profile1 from "./pages/Profile1";
import Login1 from "./pages/Login1";

const App = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // 2. Función para iniciar sesión
  const login = (username) => {
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // 3. Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      {/* Menú de navegación global */}
      {user && (
        <nav style={{ backgroundColor: "#1d9bf0", padding: "15px", textAlign: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", marginRight: "20px" }}>Inicio</Link>
          <Link to="/profile" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Mi Perfil</Link>
        </nav>
      )}

      <Routes>
        <Route path="/login" element={<Login1 onLogin={login} />} />
        
        {/* El Home también está protegido por dentro */}
        <Route path="/" element={<Home1 user={user} logout={logout} />} />
        
        {/* Protección de ruta: Si hay usuario entra a Profile, si no, lo patea a Login */}
        <Route
          path="/profile"
          element={user ? <Profile1 user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;