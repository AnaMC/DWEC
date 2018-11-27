/*
    1.1 Debes añadir desde javaScript un elemento <span> después de los input "nombre",
    “apellidos” y "codPostal". En estos span aparecerán los textos de ayuda. El texto inicial de estos
    elementos span es un * en color rojo. Contenido del fichero .css
    
    1.2 se comprobarán que los datos son válidos, en cuyo caso aparecerá el mensaje ‘formulario enviado’ 
    en una alerta y se enviará el formulario. En caso de que no se cumplan las validaciones se sacará un 
    mensaje de alerta indicando que se han de comprobar los datos y no se enviará el formulario. 
    
    Los datos son válidos si cumplen los siguientes requisitos:
        a. (4 puntos) Nombre debe tener al menos 3 caracteres
        b. (4 puntos) Apellido no puede estar vacío
        c. (8 puntos) Código postal debe ser un número de 5 dígitos. 
    Puedes validar mientras se escribe, de forma que los caracteres no numéricos no se acepten.
     
    1.3. (3 puntos) Si se pulsa el botón "limpiar" debes pedir confirmación
*/

(function() {

    var formulario = document.getElementById('formulario1');
    
    var error = createElement(span);
    error.classList.add('ayuda');

    function mensaje() {

        //All para que los pille todos y no solo 1
        var input = document.querySelectorAll("input[type='text']");

        for (let i = 0; i < input.length; i++) {

            //Creación del Span y asignación de valores.
            var spanAyuda = document.createElement('span');
            spanAyuda.classList.add('ayuda');
            spanAyuda.innerText = '* Ayuda';
            
            input[i].parentElement.insertBefore(spanAyuda, input[i].nextElementSibling);
        }
    }

    function valNombre (id , longitud){
        var nombre = document.getElementById(id);
        var r = false;
        
        if(nombre.value.length >= longitud){
            r = true;
        }else{
            nombre.parentElement.insertBefore(error, nombre.nextElementSibling);
        }
    }


    function enviar(e){
        valNombre('nombre', 3);
        
        if (valNombre === true){
            formulario.submit;
        }
    }
    
    function limpiar(e){
        
    }
    
    
    mensaje();
    formulario.addEventListener('submit', enviar);

})();
