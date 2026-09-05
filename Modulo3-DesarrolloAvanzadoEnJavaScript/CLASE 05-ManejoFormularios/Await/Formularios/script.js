const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    
    
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
        return;
    } else {
        resultado.innerHTML = 
        `<p>Hola ${nombre}, bienvenido al curso de JavaScript</p>`;
    }
});