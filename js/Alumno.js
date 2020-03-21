
// Contructor usado para crear los usuarios

function Alumno(nombre, apellido1, apellido2, fecha) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.fecha = fecha;
}

let alumno;

 Alumno.prototype.mostrarAlumno = function (){

    let fechaActual = new Date()

    let fechaAlumno = new Date(this.fecha.substring(6,10) + "/" + this.fecha.substring(3,5) + "/" +  this.fecha.substring(0,2));

    let resta = fechaActual.getTime() - fechaAlumno.getTime()

    let ventanaUsuario = window.open("", "", "left=400px,top=300px,width=300px,height=200px");
        ventanaUsuario.document.write(`
            <html>
                <head>
                    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
                    <title id="titulo">Javier Lopera Jiménez</title>
                    <script src="js/Alumno.js"></script>
                </head>
                <body>
                    <div id="container">
                        <h1>Javier Lopera Jiménez</h1>
                        <p>Nombre del usuario: `+ this.nombre + `</p>
                        <p>Apellido 1: `+ this.apellido1 + `</p>
                        <p>Apellido 2: `+ this.apellido2 + `</p>
                        <p>Fecha de Nacimiento: `+ this.fecha + `</p>
                        <p>Edad: `+ Math.round(resta/ (1000*60*60*24*365)) + ` años</p>
                    </div>
                </body>
            </html>
            `
        );
        ventanaUsuario.document.close();
}


