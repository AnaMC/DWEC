window.onload = (function() {
                                                    
                                                    /*                      CORRECCION DE ERRORES                   */
                                                    /*                                                              */
                                                    /*  1. Parar ejecucion al introducir campos incorrectos         */
                                                    /*  2. Quitar prompy y afinar funciones                         */
                                                    /*  3. Validar que el numero sea numero y la letra, letra       */
                                                    /*  4. Mejorar y mostrar mensajes de error                      */
                                                    /*                                                              */


    var numero = prompt("Introduzca el número de DNI");
    
    if(!Number.isInteger(parseInt(numero))){ // Lo pponemos aqui para q prompt pare la ejecucion
        return;
    }  
    
    var letra = prompt("Introduzca la letra");
    var letrasArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    letra = letra.toUpperCase(); //La letra del DNI ha de ir en Mayuscula

    if (numero != null && numero.length === 8 ) {
        var divisionLetra = numero % 23;

        if (letrasArray[divisionLetra] == letra) { //Division letra es la posicion del array
            alert("El DNI es correcto");
        }
        else {
            alert("El DNI es incorrecto");
        }
    }
    else {
        alert("Hay campos incorrectos");
    }

}());
