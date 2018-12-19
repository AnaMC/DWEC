/*global $*/

$(function() {

    $('form').submit(function(e) {
        e.preventDefault();
        var c = validarCorreo();

        if (c) {
           e.currentTarget.submit(); //Con e.currentTarget indicamos el 'form'.
            
        }
    });

    function validarCorreo() {
        
        //Declaración de variables
        var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var estadoCorreo = false;
        var estadoCorreo2 = false
        var r = false;
        
        //Captura de los input
        var correo = $('input[name="correo"]');
        var correo2 = $('input[name="correo2"]');;

        //Creación de los span de error
        var mensaje = $("<span/>", { 'class': 'mensaje' });
        var mensaje2 = $("<span/>", { 'class': 'mensaje2' });

        if (regex.test(correo.val().trim()) && correo.val() != "") {

            estadoCorreo = true;
            mensaje.text('');
            correo.after(mensaje);
        }
        
        if (estadoCorreo && correo.val() === correo2.val()) {
            
            estadoCorreo2 = true;
            r = true;
            mensaje2.text('');
            correo2.after(mensaje2);
            
            return r;
        }
        else {

            if (!estadoCorreo) {
                mensaje.text('*No tiene un formato válido');
                correo.after(mensaje);
            }

            if (!estadoCorreo2) {
                mensaje2.text('*Los campos deben ser iguales');
                correo2.after(mensaje2)
            }
        }
        
    }

});
