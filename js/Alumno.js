
// Contructor usado para crear los usuarios

function Alumno(nombre, apellido1, apellido2, fecha) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.fecha = fecha;
}

let inicio = () => {
    let nombre = opener.document.getElementById("nombre").value;
    let apellido1 = opener.document.getElementById("apellido1").value;
    let apellido2 = opener.document.getElementById("apellido2").value;
    let fecha = opener.document.getElementById("fecha").value;

    // Creo un nuevo usuario:

    alumno = new Alumno(nombre, apellido1, apellido2, fecha);
 
    alumno.mostrarAlumno();

}

 Alumno.prototype.mostrarAlumno = function (){

    container = document.getElementById("container");
    container.innerHTML = `
                    <h1>Javier Lopera Jiménez</h1>
                    <p>Nombre del usuario: `+ alumno.nombre + `</p>
                    <p>Apellido 1: `+ alumno.apellido1 + `</p>
                    <p>Apellido 2: `+ alumno.apellido2 + `</p>
                    <p>Fecha de Nacimiento: `+ alumno.fecha + `</p>
        `;
}

document.addEventListener("DOMContentLoaded", inicio);
