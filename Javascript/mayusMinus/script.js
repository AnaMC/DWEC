window.onload = (function() {

    var btnComprobar = document.getElementById("comprobar"); 
    var mensaje = document.getElementById("mensaje");
    var exReg = /^([0-9])*$/;
    
    function comprobar(){       
        
        var texto = document.getElementById("texto").value;
        var esNumero = exReg.test(texto);
 
        if(esNumero != true && texto != " "){
            
            if( texto === texto.toUpperCase() ){
                  mensaje.innerText = "El texto está en mayúsculas"; 
            }else if( texto === texto.toLowerCase() ){
                mensaje.innerText = "El texto está en minúsculas"; 
            }else{
                mensaje.innerText = "El texto está en mayúsculas y minúsculas"; 
            }
            
        }else{
            mensaje.innerText = "El texto introducido no es válido"; 
        }
    }
    
    btnComprobar.addEventListener('click',comprobar);
    
});
