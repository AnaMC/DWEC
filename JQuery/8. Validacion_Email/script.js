/*global $*/

$(function() {
        
    //Creación de los span de error
    var mensaje = $("<span/>", { 'class': 'mensaje' });
    var mensaje2 = $("<span/>", { 'class': 'mensaje2' });
    var mensaje3 = $("<span/>", { 'class': 'mensaje3' });
    
    //Captura de los input
    var correo = $('input[name="correo"]');
    var correo2 = $('input[name="correo2"]');;
    
    $('form').submit(function(e) {
        e.preventDefault();
        var c = validarCorreo();

        if (c) {
           e.currentTarget.submit(); //Con e.currentTarget indicamos el 'form'.               
        }
    });

     $('#cancelar').on('click', function(e) {

            if (confirm("¿Estás seguro de que deseas cancelar envío?")) {
                e.preventDefault();
                borrarCamposError();
                borrarInput();
            }
     });
                       
    function validarCorreo() {
        
        //Declaración de variables
        var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var estadoCorreo = false;
        var estadoCorreo2 = false
        var r = false;
                
        if (regex.test(correo.val().trim()) && correo.val().trim() != "") {

            estadoCorreo = true;
            correo.after(mensaje);
        }
        
        if (estadoCorreo && correo.val().trim() === correo2.val().trim()) {
            
            estadoCorreo2 = true;
            r = true;            
            correo2.after(mensaje2);
            
            return r;
        } else {

            if (!estadoCorreo) {
                mensaje.text('*No tiene un formato válido');
                correo.after(mensaje);
            }else{
                 borrarCamposError();
            }

            if (!estadoCorreo2) {
                mensaje2.text('*Los campos deben ser iguales');
                correo2.after(mensaje2)
            }else{
                 borrarCamposError();
            }
        }
        
    }
    
    function borrarCamposError(){          
        mensaje.text('');
        mensaje2.text(''); 
    }
    
    function borrarInput(){
        correo.val('');
        correo2.val('');
    }

});
