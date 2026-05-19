let boton = document.getElementById("btn-arranque");
let pantalla = document.getElementById("pantalla-estado");

function activarMotor() {
    pantalla.innerText = "Estado: Motor Encendido";
    pantalla.style.color = "green";
}

boton.addEventListener("click", activarMotor);