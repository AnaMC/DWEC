window.onload = (function() {

    var btnComprobar = document.getElementById("comprobar"); 
    var mensaje = document.getElementById("mensaje");
    var exReg = /^([0-9])*$/;
    
    function comprobar(){       
        
        var numero = document.getElementById("numero").value;
        var esNumero = exReg.test(numero);
        
        if (esNumero === true && numero != ""){
            if( numero % 2 === 0 ){
                mensaje.innerText = "¡Es un número par!";
            } else{
                mensaje.innerText = "¡Es un número impar!"; 
            }
        }else{
            mensaje.innerText = "La cadena introducida no es correcta"; 
        }
    }
    
    btnComprobar.onclick = comprobar;
    
});
