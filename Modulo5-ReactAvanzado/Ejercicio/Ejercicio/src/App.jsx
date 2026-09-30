import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if(!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        setError("Ocurrió un error");
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>

      {error && <p>{error}</p>}

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
export default App;