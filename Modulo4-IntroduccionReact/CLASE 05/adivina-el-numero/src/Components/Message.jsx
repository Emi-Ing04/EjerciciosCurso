function Message({ texto, tipo }) {
  // Renderización condicional de clases CSS basada en el 'tipo' de mensaje
  const estilo = tipo === 'exito' ? 'mensaje-exito' : 'mensaje-pista';

  // Si no hay texto, la renderización no sucede (Renderización condicional con &&)
  return (
    texto && <p className={`mensaje ${estilo}`}>{texto}</p>
  );
}

export default Message;
