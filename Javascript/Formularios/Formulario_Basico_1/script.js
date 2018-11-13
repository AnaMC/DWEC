(function () {

    var formulario = document.getElementById('form');
    formulario.addEventListener('submit', enviar);
    formulario.addEventListener('click', resetar);


    function enviar(e) {
        var nombre = generica('nombre', 3, 10, 'mensajeN');
        var apellidos = generica('apellidos', 4, 12, 'mensajeA');
        var email = femail();

        if (!nombre || !apellidos || !email) {
            e.preventDefault();
        }
    }

    function resetar(e, idError) {

        if (e.target.getAttribute("type") !== "reset") { // mira el tipo de lo que se ha pulsado, si no es reset se sale
            return;
        }
        if (!confirm("¿Seguro que deseas borrar?")) {
            e.preventDefault();
            //Borrar errores
        }
    }

    function femail() {
        var email = document.getElementById('email').value;
        var regEgex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        var r = false;

        if (regEgex.test(email)) {
            r = true;
        } else {
            var error = document.getElementById('mensajeE');
            error.innerText = 'Formato inválido. Ejemplo: correo@correo.com'
        }
        return r;
    }

    function generica(id, longitud, longitudMax, idError) {
        var elemento = document.getElementById(id);
        var error = document.getElementById(idError);
        var r = false;
        if (elemento.value.length >= longitud && elemento.value.length < longitudMax) {
            r = true;
            //borrar errores
            error.innerText = ' ';
        } else {
            error.innerText = '** Campo incorrecto, debe tener entre ' + longitud + ' y ' + longitudMax + ' caracteres.';
            //especificar errores
        }
        return r;
    }


})();
