alert //Alert es una función que muestra un mensaje en una ventana emergente. Es útil para informar al usuario sobre algo o para pedirle que confirme una acción. Por ejemplo:
alert("¡Bienvenido a mi sitio web!");

/* let opcion = prompt("¿Deseas continuar? (sí/no)"); //Prompt es una función que muestra un mensaje en una ventana emergente y permite al usuario ingresar un valor. El valor ingresado se almacena en una variable. Por ejemplo:
let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola, " + nombre + "!"); */

let saldo = 1000;
let opcion = parseInt(prompt("Bienvenido al cajero automatico\n1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir"));



switch (opcion) {
    case 1:
        alert("Tu saldo es: " + saldo);
        break;
    case 2:
        let retiro = parseFloat(prompt("¿Cuánto dinero deseas retirar?"));
        if (retiro > saldo) {
            alert("No tienes suficiente saldo");    
        } else {
            saldo -= retiro;
            alert("Has retirado: " + retiro + "\nTu nuevo saldo es: " + saldo);
        }
        break;
    case 3:
        let deposito = parseFloat(prompt("¿Cuánto dinero deseas depositar?"));
        saldo += deposito;
        alert("Has depositado: " + deposito + "\nTu nuevo saldo es: " + saldo);
        break;
    case 4:
        alert("Gracias por usar el cajero automático. ¡Hasta luego!");
        break;  
    default:
        alert("Opción no válida. Por favor, elige una opción del 1 al 4.");
        break;
}