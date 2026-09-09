document.getElementById('registroEvento').addEventListener('submit', (event) => {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario || !fecha) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      // Validaciones nuevas 

      // Validación A: el nombre debe tener al menos 3 caracteres (Sin contar espacios
      // .trim() limpia los espacios invisibles al inicio y al final.
      // .length cuenta cuántas letras quedaron.
      if (nombre.trim().length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        return;
      }

     //Validación B: el correo debe parecer un correo real. 
      if (!correo.includes('@') || !correo.includes('.')) {
    alert('Error en Correo: Asegúrate de incluir un arroba (@) y un dominio válido (.com, .mx).');
    return;
     }

     // Validación C: el teléfono debe ser un número de 10 dígitos.
     // isNaN() significa "Is Not a Number" (¿No es un número?). Si el usuario escribe letras, lanzará error
     if (telefono.length !== 10 || isNaN(telefono)) {
    alert('Error en Teléfono: Debe contener exactamente 10 números, sin espacios ni letras.');
    return;
     }

     // 4. Éxito
     // Si el código logró llegar hasta aquí, significa que todas las validaciones pasaron.
      alert('Registro exitoso. ¡Gracias por registrarte!');

     // Limpiar el formulario automáticamente después del éxito
      document.getElementById('registroEvento').reset();

    });