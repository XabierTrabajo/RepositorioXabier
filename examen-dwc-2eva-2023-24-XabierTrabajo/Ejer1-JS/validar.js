// Javascript
console.log(pabellones);
// cargo el evento al abrir la pagina
window.addEventListener("load",eventos);

// añado el evento al link
function eventos(){
    event.preventDefault();
    document.getElementById("enviar").addEventListener("click", validar)
}

// añado la funcion del evento
function validar() {
    let servicio = document.getElementById("servicio").value;
    let pabellon = document.getElementById("pabellon").value;
    let mostrar  = document.getElementById("mostrar");
    let visible = false;
    let arrayError = 0;
    // servicio
    if (!(/w[a-zA-Z0-9-]/.test(servicio))) {
        console.log("servicio correcto");
    }
    else {
        console.log("servicio incorrecto");
        alert("Escribe un servicio valido");
    }
    // mostrado
    if (mostrar.checked == true) {
        visible = true;
    }
    else {
        visible = false;
    }

    // pabellon
    for (let i = 0; i < pabellones.length; i++) {
        // si contiene un pabellon valido
        if (pabellon == pabellones[i]) {
            console.log("pabellon correcto");
            i = pabellones.length;
        }
        else {
            console.log("pabellon incorrecto: reintentando...");
            arrayError++;
        }
    }
    if (arrayError == pabellones.length) {
        alert("Escribe un pabellon valido");
    }

    let servicioObjeto = new Servicio(servicio, pabellon, visible);
    servicios.push(servicioObjeto);
    Servicio.mostrarInfo();
}

