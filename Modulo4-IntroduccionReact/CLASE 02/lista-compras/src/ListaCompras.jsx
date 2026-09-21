import { useState } from "react";

function ListaCompras() {
  // Se define el estado para la lista de compras y el input
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // Función para agregar un nuevo producto a la lista
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto(""); // Se limpia el input
    }
  };

  // Función para eliminar un producto usando su índice con .filter()
  const eliminarProducto = (indexAEliminar) => {
    const productosActualizados = productos.filter((_, index) => index !== indexAEliminar);
    setProductos(productosActualizados);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "sans-serif" }}>
      <h2>Lista de Compras</h2>
      
      {/* Input vinculado al estado 'nuevoProducto' */}
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
        placeholder="Escribe un producto..."
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      
      <button onClick={agregarProducto} style={{ padding: "8px 15px", cursor: "pointer" }}>
        Agregar
      </button>

      {/* Lista visual renderizada con .map() */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {productos.map((producto, index) => (
          <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
            {producto}{" "}
            <button 
              onClick={() => eliminarProducto(index)}
              style={{ marginLeft: "10px", backgroundColor: "#ff4d4d", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}
            >
              Realizado / Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;