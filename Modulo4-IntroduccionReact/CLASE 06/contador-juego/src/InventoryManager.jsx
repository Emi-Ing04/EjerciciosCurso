import { useReducer, useRef, useCallback, useState, useEffect } from "react";

// Inicializar estado leyendo de localStorage (Ejercicio 2)
const init = () => {
  const guardado = localStorage.getItem('inventarioTienda');
  return guardado ? { products: JSON.parse(guardado) } : { products: [] };
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { 
        products: [...state.products, { id: Date.now(), name: action.name, quantity: 1 }] 
      };
    case "increment":
      return { 
        products: state.products.map(p =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        ) 
      };
    case "decrement":
      return { 
        products: state.products.map(p =>
          p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
        ) 
      };
    case "remove":
      return { 
        products: state.products.filter(p => p.id !== action.id) 
      };
    case "clear": // Ejercicio 3: Acción para borrar todo
      return { products: [] };
    default:
      return state;
  }
}

export default function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, null, init);
  const inputRef = useRef(null);
  
  // Ejercicio 1: Estado para el buscador
  const [busqueda, setBusqueda] = useState(''); 

  // Ejercicio 2: Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('inventarioTienda', JSON.stringify(state.products));
  }, [state.products]);

  const handleAddProduct = () => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value });
      inputRef.current.value = ""; 
      inputRef.current.focus(); // Retornamos el foco al input para agilizar la carga
    }
  };

  const handleIncrement = useCallback((id) => dispatch({ type: "increment", id }), []);
  const handleDecrement = useCallback((id) => dispatch({ type: "decrement", id }), []);
  const handleRemove = useCallback((id) => dispatch({ type: "remove", id }), []);
  
  // Ejercicio 3: Función para vaciar con alerta
  const handleClear = useCallback(() => { 
    if (window.confirm("¿Seguro que deseas vaciar todo el inventario?")) {
      dispatch({ type: "clear" });
    }
  }, []);

  // Ejercicio 1: Lógica de filtrado
  const productosFiltrados = state.products.filter(producto =>
    producto.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', border: '1px solid #2ecc71', borderRadius: '8px', margin: '20px 0' }}>
      <h2>Gestor de Inventario e-Commerce</h2>

      {/* Buscador */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="🔍 Buscar producto..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      {/* Agregar Producto */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input ref={inputRef} type="text" placeholder="Nombre del nuevo producto..." style={{ flex: 1 }} />
        <button onClick={handleAddProduct}>Agregar</button>
        <button onClick={handleClear} style={{ backgroundColor: '#e74c3c', color: 'white' }}>Vaciar Todo</button>
      </div>

      {/* Lista de inventario */}
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {productosFiltrados.length === 0 ? (
          <p>No hay productos que coincidan con tu búsqueda.</p>
        ) : (
          productosFiltrados.map((product) => (
            <li key={product.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', background: '#f9f9f9', padding: '10px' }}>
              <span style={{ flex: 1 }}><strong>{product.name}</strong> - Stock: {product.quantity}</span>
              <button onClick={() => handleIncrement(product.id)}>+</button>
              <button onClick={() => handleDecrement(product.id)}>-</button>
              <button onClick={() => handleRemove(product.id)}>❌</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}