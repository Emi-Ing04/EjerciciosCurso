// Se exporta la función para iniciar sesión
export const login = (username, password) => {
  // Aquí iría la lógica de autenticación, por ejemplo, verificar el usuario y contraseña
  if (username === "admin" && password === "1234") {
    return '✅ Acceso concedido. ¡Bienvenido, ${username}!';
  } else {
    return '❌ Acceso denegado. Usuario o contraseña incorrectos.';
  }
};

// Exportamos la función para cerrar sesión
export const logout = () => {
  // Aquí iría la lógica para cerrar sesión, como limpiar tokens o datos de usuario
  return '✅ Has cerrado sesión exitosamente.';
}