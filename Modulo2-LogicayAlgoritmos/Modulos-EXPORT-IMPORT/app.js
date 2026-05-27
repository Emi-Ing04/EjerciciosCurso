// 1. Se importan las herramientas de autenticación (Exportaciones nombradas)
import { login, logout } from './auth.js';

// 2. Importamos el motor de la base de datos (Exportación por defecto)
import database from './database.js';

console.log("🚀 --- ARRANCANDO APLICACIÓN WEB MODULAR --- 🚀\n")

// -- Prueba 1: Control de Accesos (Autenticación) --
const intentoLogin = login("admin", "1234");
console.log(intentoLogin);  // Debería mostrar un mensaje de acceso concedido

// -- Prueba 2: Operaciones con la Base de Datos --
database.saveData("usuario", { user: "admin", fecha: "2026-05-26" });

// Solicitamos datos de la base de datos
const datosUsuario = database.getData("usuario");
console.log("Resultado de búsqueda;", datosUsuario);

// -- Prueba 3: Cerrar Sesión --
const intentoLogout = logout();
console.log("\n" + intentoLogout);