import { useEffect, useState } from "react";

function App() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        
        // Corregido: de "datas" a "data"
        setUser(data);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    obtenerUsuario();
    
    // Corregido: Se agregan [userId] para que se ejecute cada vez que cambie el ID
  }, [userId]);

  return (
    <div>
      <h1>Buscar usuario</h1>
      <p>ID actual: {userId}</p>

      <button onClick={() => setUserId(userId - 1)}>
        Anterior
      </button>

      <button onClick={() => setUserId(userId + 1)}>
        Siguiente
      </button>

      {user && (
        <div>
          {/* Corregido: de "names" a "name" */}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;