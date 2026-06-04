# 🛒 Gestión de Lista de Compras (Estructuras de Datos en ES6)

Este proyecto implementa un sistema básico para gestionar una lista de compras, asegurando la integridad de los datos mediante el control de duplicados y la manipulación dinámica de la interfaz.

## 🛠️ Tecnologías y Algoritmos Aplicados

* **Estructura de Datos Línea (Array):** Almacenamiento base de los productos del usuario.
* **Control de Duplicados Eficiente (`Set`):** Se utilizó un conjunto matemático temporal para evaluar la existencia de un producto antes de permitir su inserción con `.push()`, garantizando que no existan elementos repetidos.
* **Filtrado Inverso (`.filter()`):** Para la eliminación de elementos se aplicó un filtro asíncrono que reconstruye la lista omitiendo el elemento seleccionado por el usuario, evitando errores de desbajuste de índices.
* **Renderizado del DOM:** Uso de `.forEach()` y *Template Literals* para proyectar los datos de forma limpia en el navegador.
* 