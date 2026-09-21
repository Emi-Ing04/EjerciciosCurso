import { useState } from "react";
import "./ListaCompras.css"; 

function ListaCompras() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // 1. Prevenir duplicados
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      // Verificamos si el producto ya existe en el arreglo
      if (productos.includes(nuevoProducto.trim())) {
        alert("¡Este producto ya está en tu lista!");
        return;
      }

      setProductos([...productos, nuevoProducto.trim()]);
      setNuevoProducto("");
    }
  };

  // 2. Eliminar producto individual por índice
  const eliminarProducto = (indexAEliminar) => {
    const productosActualizados = productos.filter((_, index) => index !== indexAEliminar);
    setProductos(productosActualizados);
  };

  // 3. Vaciar toda la lista de golpe
  const limpiarLista = () => {
    setProductos([]);
  };

  return (
    <div className="compras-container">
      <h2 className="compras-titulo">Lista de Compras</h2>

      {/* Contador dinámico de elementos */}
      <p className="compras-contador">
        {productos.length === 0 
          ? "Tu lista está vacía" 
          : `Tienes ${productos.length} producto(s) en tu lista`}
      </p>

      {/* Input y Botón de agregar */}
      <div className="compras-form">
        <input
          type="text"
          className="compras-input"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          placeholder="Escribe un producto..."
        />
        <button className="compras-btn-agregar" onClick={agregarProducto}>
          Agregar
        </button>
      </div>

      {/* Lista de productos */}
      <ul className="compras-lista">
        {productos.map((producto, index) => (
          <li key={index} className="compras-item">
            <span>{producto}</span>
            <button 
              className="compras-btn-eliminar"
              onClick={() => eliminarProducto(index)}
            >
              Comprado / Eliminar
            </button>
          </li>
        ))}
      </ul>

      {/* Botón para vaciar toda la lista (solo se muestra si hay productos) */}
      {productos.length > 0 && (
        <button className="compras-btn-limpiar" onClick={limpiarLista}>
          Vaciar toda la lista
        </button>
      )}
    </div>
  );
}

export default ListaCompras;