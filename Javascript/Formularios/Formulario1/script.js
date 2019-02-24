//- Una contraseña: sólo puede contener letras , números y el subrayado; al menos debe contener
//una letra en mayúsculas, una letra en minúsculas y un número; longitud mínima 6 caracteres y máxima 15.
//- Repetición de la contraseña: debe coincidir con la anterior, obviamente.
//- La dirección de email: no puede estar vacío, hay que comprobar que cumple el patrón de una
//dirección de email.
//-Sexo: se debe elegir un valor
//- Fecha de nacimiento: comprobar que es una fecha válida y el usuario o usuaria es mayor de edad
//- Ciudad y país de residencia: no obligatorios
//- Foto
//- Una operación matemática de suma entre dos números enteros de un dígito determinados al
//azar (por ej.0  5 + 3 = ?) con el fin de solicitar su resultado para evitar bots
//- Una casilla de verificación de "Acepto las condiciones" inicialmente desactivada. Hasta que ésta
//opción no se verifique no se habilitará el botón de envío.
//- Un botón de envío con el texto "Crear cuenta"
//- Un botón de borrado de datos (reset)

(function () {

    var formulario = document.getElementById('formulario1');
    var cancelar = document.getElementById('borrar');
    
    //Expresiones regulares
    var regexCorreo = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var rNombre = new RegExp('^[a-zA-Z0-9]*$');
//    var rnombre = new RegExp('^[a-zA-Z0-9]{' + longMinima + ',' + longMaxima '}[a-zA-Z]*$');
    
    //Variables
    var aviso = document.getElementById('aviso');
    var errorNombre = document.getElementById('errorNombre'); 
    
    function enviar(e) {
        e.preventDefault();
        nombre = comprobarNombre();

        if (nombre) {
           formulario.submit;
        }
    }

    function borrar(e) {
        if (confirm("¿Estás seguro de que deseas cancelar envío?")) {
            e.preventDefault();
            // Borrar campos
            // Borrar mensajes de error
            borrarDatos();
        }
    }

    function comprobarNombre() {             
        var nombre = document.getElementById('nombre').value;               
        var estado = false;
        
        if (rNombre.test(nombre)) {
            if(nombre.length >= 3 && nombre.length <=15){
                estado = true;
            }else if(nombre === ''){
                errorNombre.innerText = ' ¡Ups! parece que has olvidado este campo';                
                aviso.style.color = "red";
            }else{
                errorNombre.innerText = ' La longitud debe estar entre 3 y 15 caracteres';
                aviso.style.color = "red";
            }           
        } else {
            errorNombre.innerText = ' Caracteres permitidos: letras y números';
            aviso.style.color = "red";
        }
        return estado;
    }
    
    function borrarDatos(){
      aviso.style.color = "black";
      errorNombre.innerText = ' ';
    }
    


    formulario.addEventListener('submit', enviar);
    cancelar.addEventListener('click',borrar);
    
})();
