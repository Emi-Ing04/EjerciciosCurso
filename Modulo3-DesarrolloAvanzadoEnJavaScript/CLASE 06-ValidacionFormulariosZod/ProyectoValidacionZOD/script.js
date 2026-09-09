// Importamos Zod
    const { z } = window.Zod;

    // Esquema para validar los datos del formulario
    const registerSchema = z.object({
      name: z.string().min(1,"El nombre es obligatorio."), // PISTA: Valida que el nombre no esté vacío.
      email: z.string().email("El correo electrónico no es válido."),
      password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."), // PISTA: Valida que la contraseña tenga al menos 6 caracteres.
    });

    document.getElementById("registerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Captura de los valores ingresados
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      try {
        // 4. Validamos los datos con el esquema
        registerSchema.parse(formData);
    
        // Si pasa la validación, limpiamos errores anteriores y mostramos éxito
        document.getElementById("errors").textContent = ""; 
        alert("¡Registro exitoso!");
        
        } catch (error) {
        // 5. Si falla, extraemos los mensajes y los unimos con un guion
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(" - ");
        }
    });