function RestartButton({ onReset }) {
  return (
    <button className="btn-reiniciar" onClick={onReset}>
      Jugar de nuevo
    </button>
  );
}

export default RestartButton;