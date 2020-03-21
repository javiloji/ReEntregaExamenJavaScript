
    // let preferenciasVentana = "left=400px,top=300px,width=300px,height=200px";


     comprobarFechaNacimiento = function (fecha) {

        // Expresion utilizada para validar la fecha de nacimiento

        let expresionFecha = new RegExp("^([0-9]{2})(/{1}|-{1})([0-9]{2})/{1}|-{1}([0-9]{4})$");

        try {
            let bisiesto = false;
            let maximoDiasMes;
            let [, dia,, mes, anno] = expresionFecha.exec(fecha);

            // Paso los dias, meses y años a numeros enteros

            dia = parseInt(dia);
            mes = parseInt(mes);
            anno = parseInt(fecha.slice(6,fecha.length));

            // Compruebo que el año sea o no bisiesto

            if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
                bisiesto = true;
            }
            
            // Asigno el numero de dias que tiene cada mes, teniendo en cuenta si es bisiesto ponerle
            // Un dia mas a febrero

            switch (mes) {
                case 1, 3, 5, 7, 8, 10, 12:
                    maximoDiasMes = 31;
                    break;
                case 4, 6, 9, 11:
                    maximoDiasMes = 30;
                    break;
                default:
                    if (!bisiesto) {
                        maximoDiasMes = 28;
                        break;
                    }
                    maximoDiasMes = 29;
                    break;
            }

            if ((expresionFecha.test(fecha.trim()) && dia <= maximoDiasMes && mes <= 12 && anno <= 2020 && anno >1800)) {
                return "";
            }
            else {
                return "Fecha inválida";
            }
        } catch{
            return "Fecha inválida";
        }
    }

    let nombre;
    let apellido1;
    let apellido2;
    let fecha;

    let crearAlumno = () => {

        nombre = document.getElementById("nombre").value;
        apellido1 = document.getElementById("apellido1").value;
        apellido2 = document.getElementById("apellido2").value;
        fecha = document.getElementById("fecha").value;

        if (nombre &&
            apellido1 &&
            apellido2 &&
            comprobarFechaNacimiento(fecha) == "") {

            // Creo la ventana con las preferencias asignadas
            alumno = new Alumno(nombre, apellido1, apellido2, fecha);
    
            alumno.mostrarAlumno(alumno);
        }
        else{
            for (const i of document.getElementsByTagName("fieldset")[0].getElementsByTagName("input")) {
                if(i.value == ""){

                    i.nextSibling.nextSibling.innerHTML = "Este campo no puede quedar vacío.";
                    i.nextSibling.nextSibling.style.color = "red";

                }
                else{
                    i.nextSibling.nextSibling.innerHTML = "";
                }
            }

            if(comprobarFechaNacimiento(document.getElementById("fecha").value) != ""){
                document.getElementById("msj_fecha").innerHTML = "Fecha incorrecta";
                document.getElementById("msj_fecha").style.color = "red";
            }
            else{
                document.getElementById("msj_fecha").innerHTML = "";
            }
        }
    }

    let init = function () {

        document.getElementsByTagName("h1")[0].style.textAlign = "center";

        document.getElementById("crear").addEventListener("click", crearAlumno);


    }

    document.addEventListener("DOMContentLoaded", init);
