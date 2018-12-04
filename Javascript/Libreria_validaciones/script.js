(function() {

    class validForm {
        /**
        PASAR LOS INPUT
        **/


        //metodos

        //Longitud de un campo
        static longitud(id, longitud, longitudMax, idError) {
            var elemento = document.getElementById(id);
            var error = document.getElementById(idError);
            var r = false;
            if (elemento.value.length >= longitud && elemento.value.length < longitudMax) {
                r = true;
                //borrar errores
                error.innerText = ' ';
            }
            else {
                error.innerText = '** Campo incorrecto, debe tener entre ' + longitud + ' y ' + longitudMax + ' caracteres.';
                //especificar errores
            }
            return r;
        }
        //Email correcto
        static email(email) {
            var email = document.getElementById(email);
            var regEgex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            var r = false;

            if (regEgex.test(email.value)) {
                r = true;
            }
            else {
                var error = document.getElementById('mensajeE');
                error.innerText = 'Formato inválido. Ejemplo: correo@correo.com'
            }
            return r;
        }
        //Contrasena
        
        //Sexo checked
        static sexo(genero) {
            var genero = document.getElementById(genero)
            var r = false;

            if (genero.checked === true) {
                r = true;
            }
        }
        //Mayor edad
        
        //Contador de caracteres
        static contadorTextArea(disponibles) {
            var maxTextAtrea = textArea.getAttribute("maxlength");
            var disponibles = document.getElementById(disponibles);
            var restantes = maxTextAtrea - textArea.value.length;

            disponibles.innerText = 'Caracteres disponibles: ' + restantes;

        }
        //politicas privacidad
        static policy(policy){
            var policy = document.getElementById(policy);
            var r = false;
            
            if(policy.checked === true){
                r = true;
            }
        }
        //Captcha
        
        
    }
})();
