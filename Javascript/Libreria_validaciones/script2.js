(function() {

var formulario = document.getElementById("formulario");


    class Validar {

        constructor(formulario) {
            this.formulario = formulario;
            //Para agregarle el manejador de eventos al formulario utilizamos una función flecha, de este modo le decimos
            // "esto va aquí tonto" :P 
            formulario.addEventListener('submit', (e)=>{
                e.preventDefault();
                this.comprobar(e);
            })
        }

        //Getter

        get Longitud() {
            let longitudForm = this.formulario.querySelectorAll('input[maxlength]'); //Sacamos la longitud de los campos
            //Si hay o no campo
        }

        get email(){
            let emailForm = this.formulario.querySelector('input[type="email"]');
        }
        
        //Funciones de comprobacion

        /*Estatico para que no nos obligue a usar el constructor para utilizar el méto, de esta forma podemos utilizarlo sin
        pasarle el formulario(Sin crear el objeto con new.....) */
        
        
        //Longitud de un campo
        
        static valLongitud(longitud, longitudMax, idError) {
            var longitud = this.longitudForm;
            var error = document.getElementById(idError);
            var r = false;

            for (let i = 0; i < elemento.length; i++) {
                if (longitud.value.length >= longitud && longitud.value.length < longitudMax) {
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
        }

        //Email correcto
        static valEmail() {
            var email = this.emailForm;
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
        
        static comprobar (){
            let longitud = longitud(3, 8, null);
            let email = email();
            
            if(longitud && email){
                formulario.submit;
            }else{
                alert('Compruebe los campos');
            }
        }
        
    }
    
    var objetoValidar = new Validar(formulario);
})();
