// Javascript

// cargo el evento al abrir la pagina
window.addEventListener("load",eventos);

// añado el evento al link
function eventos(){
    event.preventDefault();
    document.getElementById("enviar").addEventListener("click", validar);
}

function validar() {
    event.preventDefault();
    let usuario = document.getElementById("user").value;
    let contrasena = document.getElementById("password").value;
    const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{3,8}$/;

    // usuario
    
    // contrasena 
    if (regex.test(contrasena)) {
        console.log("Contraseña correcta!");
        // eliminar el estilo del error
        document.getElementById("password").removeAttribute("style");
    } 
    else {
        console.log("Contraseña incorrecta!");
        // centrar en la contraseña incorrecta
        document.getElementById("password").focus();
        // cambiar color de error
        document.getElementById("password").style.backgroundColor = "red";
        document.getElementById("password").style.color = "white";
    }
}