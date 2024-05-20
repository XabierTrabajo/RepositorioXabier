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
    let valido = 0;

    // servicio
    if (!(/w[a-zA-Z0-9-]/.test(servicio))) {
        console.log("servicio correcto");
        valido++;
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
            valido++;
        }
        else {
            console.log("pabellon incorrecto: reintentando...");
            arrayError++;
        }
    }
    if (arrayError == pabellones.length) {
        alert("Escribe un pabellon valido");
    }

    if (valido == 2) {
        // crea el servicio y lo mete en el array
        let servicioObjeto = new Servicio(servicio, pabellon, visible);
        servicios.push(servicioObjeto);

        // muestra el objeto creado y dependiendo de visible aparece o no por pantalla
        servicioObjeto.mostrarInfo();

        //console.log(servicioObjeto.mostrarInfo());
        // mostrar por pantalla (no se puede modificar el html en este caso)
        //document.getElementById("respuesta").innerHTML = "Servicio: " + servicioObjeto.mostrarInfo();
    }
    
    
}

