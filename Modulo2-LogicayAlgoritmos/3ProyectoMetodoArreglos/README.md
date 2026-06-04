# 📦 Filtro y Orden de Productos de una Tienda Online

Este proyecto demuestra la implementación y encadenamiento de métodos avanzados de arreglos en JavaScript bajo el estándar **ECMAScript 6 (ES6)**.

## ⚙️ Flujo de Procesamiento de Datos

1. **`filter()`**: Se evaluó el inventario completo, aislando únicamente los productos con un precio menor a $100.
2. **`sort()`**: El subconjunto filtrado se ordenó alfabéticamente de forma ascendente utilizando el método mecánico `localeCompare()`.
3. **`map()`**: Se transformó el arreglo de objetos ordenados para extraer una lista limpia que contiene únicamente las cadenas de texto (`strings`) con los nombres.
4. **`reduce()` (Caso Extra)**: Se acumuló el precio de los artículos filtrados para generar un reporte del valor financiero total del inventario económico.
