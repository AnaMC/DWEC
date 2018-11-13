window.onload = (function() {

    var botonDia = document.getElementById("botonDia");
    botonDia.onclick = semana;

    var botonFinde = document.getElementById("botonFinde");
    botonFinde.onclick = finde;
    var textoDia = document.getElementById("textoDia");

    function semana() {

        var fechaActual = new Date().getDay(); //Capturamos la fecha y de ahí el día
        var fecha;

        switch (fechaActual) {
            case 0:
                fecha = "Domingo"; //Tiene que empezar en domingo para que no salga un día mas 
                break;
            case 1:
                fecha = "Lunes";
                break;
            case 2:
                fecha = "Martes";
                break;
            case 3:
                fecha = "Miércoles";
                break;
            case 4:
                fecha = "Jueves";
                break;
            case 5:
                fecha = "¡¡Viernes!!";
                break;
            case 6:
                fecha = "Sábado";
                break;
        }
        textoDia.innerText = 'Hoy es: ' + fecha;
    }

    function finde() {

        var fechaActual = new Date().getDay(); //Capturamos la fecha y de ahí el día
        var fecha;

        switch (fechaActual) {
            case 0:
                fecha = "Domingo!!";
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                fecha = "Aún queda un poco!!";
                break;
            case 6:
                fecha = "Sábado!!";
                break;

        }
        textoDia.innerText = fecha;
    }

});
