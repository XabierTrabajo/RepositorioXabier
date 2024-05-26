// Javascript
var numerosAleatorios = [];

function generarNumerosAleatorios() {
    var nombre = document.getElementById("nombre").value;
    var limit  = document.getElementById("limit").value;
    var count  = document.getElementById("count").value;

    //console.log("nombre: "+nombre+" limite: "+limit+" count: "+count);

    // nombre
    if (nombre == "" || nombre == " " || nombre == null) {
        alert("Debes introducir un nombre para poder continuar.");
        return false;
    }
    else {
        console.log("nombre: "+nombre);
    }
    // limite
    if (limit == 0 || limit == null) {
        limit = 50;
        console.log("limite: "+limit);
    }
    else if (limit < 0) {
        limit = limit *-1;
        console.log("limite: "+limit);
    }
    else {
        console.log("limite: "+limit);
    }
    // cantidad
    if (count == 0 || count == null) {
        count = 6;
        console.log("cantidad: "+count);
    }
    else if (count < 0) {
        count = count *-1;
        console.log("cantidad: "+count);
    }
    else {
        console.log("cantidad: "+count);
    }

    let numeros = [];
    let randomNumbers = [];
    for (let i = 0; i < count; i++) {
        let random = Math.floor(Math.random() * limit);
        
        // si coinciden los numeros
        if (randomNumbers.includes(random)) {
            // salta al siguiente
            random = Math.floor(Math.random() * limit);
            i--;
            
        }
        else {
            numeros.push(random);
            randomNumbers.push(random);
        }
    }
    // crea el objeto persona
    /*
    let objetoNumeros = new Persona(nombre, numeros);
    numerosAleatorios.push(objetoNumeros);
    console.log(numerosAleatorios);
    // escribo lo creado
    const respuestasCorrectas = document.body.appendChild(document.createElement("li"));
    respuestasCorrectas.textContent = "Nombre: "+ nombre +" Números: "+ numeros;
    */

    let playerRandom = new Persona(nombre, numeros);
    const respuestasCorrectas = document.body.appendChild(document.createElement("li"));
    respuestasCorrectas.textContent = playerRandom.toString();
}

class Persona {
    // Constructor
    constructor(nombre, numeros) {
        this._nombre = nombre;
        this._numeros = numeros;
    }
    // Getters
    get nombre() {
        return this._nombre;
    }
    get numeros() {
        return this._numeros;
    }
    // Setters
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set numeros(numeros) {
        this._numeros = numeros;
    }


    //Metodo toString objeto nuevo
    toString(){
        return `Nombre: ${this.nombre}, Números: ${this.numeros}`
    }
}