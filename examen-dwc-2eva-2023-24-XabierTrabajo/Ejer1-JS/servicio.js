const pabellones = ["Arrupe", "Areilza", "Aztarain", "Guturbai"];
const servicios = [];

class Servicio {
    // Constructor
    constructor(servicio, pabellon, visible) {
        this._servicio = servicio;
        this._pabellon = pabellon;
        this._visible = visible;
    }
    
    // Getters
    get servicio() {
        return this._servicio;
    }
    get pabellon() {
        return this._pabellon;
    }
    get visible() {
        return this._visible;
    }
    // Setters
    set servicio(servicio) {
        this._servicio = servicio;
    }
    set pabellon(pabellon) {
        this._pabellon = pabellon;
    }
    set visible(visible) {
        this._visible = visible;
    }

    // Método mostrar
    mostrarInfo() {
        /*
        // añade la respuesta correcta a la lista
        const respuestasCorrectas = document.body.appendChild(document.createElement("li"));
        respuestasCorrectas.textContent = "Correcto! Cantante/grupo: "+ pregunta +" Categoría: "+ categoria;
        */
        //document.getElementById("demo").innerHTML = ""+ servicios[0].servicio + " " + servicios[0].pabellon + " " + servicios[0].visible;
        for (let i = 0; i < servicios.length; i++) {
            return `${servicios[i].servicio} ${servicios[0].pabellon} ${servicios[0].visible}`
            
        }
    }
}