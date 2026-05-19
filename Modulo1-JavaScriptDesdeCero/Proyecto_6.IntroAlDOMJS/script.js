let input = document.getElementById('inputComentario');
let boton = document.getElementById('btnAgregar');
let contenedor = document.getElementById('bandaComentarios');

boton.addEventListener('click', function() {
    
    
    let texto = input.value;
    
    if (texto === "") {
        return; 
    }
    
    let nuevoBloque = document.createElement('div');
    
    let fechaHora = new Date().toLocaleString();

    nuevoBloque.innerHTML = `
        <p><strong>[${fechaHora}]</strong>: ${texto}</p>
        <button class="btnEliminar">Eliminar este comentario</button>
        <hr>
    `;

    let botonEliminar = nuevoBloque.querySelector('.btnEliminar');
    botonEliminar.addEventListener('click', function() {
        nuevoBloque.remove(); // El brazo robótico desatornilla y tira la pieza
    });

    contenedor.appendChild(nuevoBloque);

    input.value = "";
});