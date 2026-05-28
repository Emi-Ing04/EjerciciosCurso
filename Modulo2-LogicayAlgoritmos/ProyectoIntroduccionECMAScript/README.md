# ✈️ Planificador de Viajes Moderno (ECMAScript 6)

¡Bienvenido al proyecto de modernización del Planificador de Viajes! Este proyecto forma parte del **Módulo 2 (Lógica y Algoritmos)** de mi formación frontend. El objetivo principal fue realizar una reingeniería completa de una aplicación antigua de JavaScript para adaptarla a los estándares modernos de **ECMAScript 6 (ES6)**.

---

## 🛠️ Mejoras de Ingeniería Aplicadas

Durante el proceso de actualización del código, se sustituyeron malas prácticas antiguas por herramientas modernas de desarrollo:

* **Adiós a `var`:** Se reemplazaron todas las declaraciones antiguas por `let` (para variables mutables como el costo) y `const` (para estructuras fijas como el arreglo de destinos), mejorando el control de la memoria y el alcance (scope).
* **Funciones Flecha (`=>`):** Se rediseñaron las funciones tradicionales utilizando la sintaxis compacta de *Arrow Functions*, haciendo el código más limpio y legible.
* **Programación Modular (`import`/`export`):** Se rompió el archivo único global para dividir la aplicación en módulos independientes y especializados de forma nativa en el navegador:
    * `viajes.js`: Contiene la lógica del negocio, almacenamiento de datos y cálculo de costos.
    * `app.js`: Actúa como la línea de ensamblaje principal e interacción inicial.
* **Iteración Funcional (`forEach`):** Se eliminó el ciclo `for` tradicional mecánico basado en índices numéricos (`[i]`) y se sustituyó por el método automatizado `.forEach()` para recorrer el arreglo de destinos de manera más elegante.
* **Manipulación Dinámica del DOM:** Se extendió la funcionalidad original de la plataforma para que los itinerarios y costos calculados no solo se impriman en la consola (F12), sino que se rendericen directamente en la interfaz del navegador en forma de tarjetas dinámicas utilizando *Template Literals*.

---

## 📁 Estructura del Módulo

El proyecto está organizado de forma modular bajo la siguiente arquitectura de archivos:

```text
ProyectoIntroduccionECMAScript/
├── index.html        # Estructura de la página y activación del type="module"
├── app.js            # Orquestador y punto de entrada de la aplicación
├── viajes.js         # Módulo especializado en la gestión y cálculo de viajes
└── README.md         # Documentación técnica del proyecto (Este archivo)