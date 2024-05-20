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
        if (this.visible == false) {
            return  console.log(`El sercivio ${this.servicio} se encuentra en el pabellón ${this.pabellon}. Visible? ${this.visible}`);
        }
        else {
            // para poder mostrar el resultado por pantalla y consola a la vez
            // se necesita guardar cada respuesta en variables y luego pido al return que me devuelva las respuestas como array
            const cons = console.log(`El sercivio ${this.servicio} se encuentra en el pabellón ${this.pabellon}. Visible? ${this.visible}`);
            const txt = document.getElementById("respuesta").innerHTML = `El sercivio ${this.servicio} se encuentra en el pabellón ${this.pabellon}. Visible? ${this.visible}` //&&
            return [cons, txt];
            
        }
    }
}