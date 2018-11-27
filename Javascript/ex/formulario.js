(function (){
    var formulario = document.getElementById("formulario1");
    formulario.addEventListener('submit',envio);
    var codigo = document.getElementById('codPostal');
    codigo.addEventListener('keypress',validarCod)

    //formulario.addEventListener('submit',valFormulario);
    //formulario.addEventListener('reset',borrarDatos)

   // function comprobarDNI(dni){
       
//       if (dni.length == 9 && parseInt(dni.substring(0,8))){
//           return true;
//       }else{
//       	dni.nextElementSibling.textContent="error, introduce un dni con formato de 8 numeros y una letra ej:12345678X"
//           return false;
//       }
//   }
   
    function add(){
       /* var lista = document.getElementsByTagName('input');*/
        var listaquery = document.querySelectorAll("input[type='text']")
        /*for(let i= 0 ; i<lista.length;i++){
            
            if(lista[i].getAttribute('type')=='text'){
                var span = document.createElement('span');
                span.textContent='*';
                span.classList.add('ayuda');
                lista[i].parentNode.insertBefore(span,lista[i].nextElementSibling);
            }
        }*/
        for(let i= 0 ; i<listaquery.length;i++){
                var span = document.createElement('span');
                span.textContent='*';
                span.classList.add('ayuda');
                listaquery[i].parentNode.insertBefore(span,listaquery[i].nextElementSibling);
            
        }
        
    }
   function borrarDatos(evento){
       if(!confirm("¿Borrar  datos  delformulario?")){
           evento.preventDefault();
           
       }
       
   }
   
   function mover(){
       var p = document.getElementById('razones')
       var div = document.getElementById('razones').parentNode;
       p.textContent='estas son las tres razones'
       div.appendChild(p)
   }
   function validarnombre(nombre){
       var texto=nombre.value
       if(texto.length>=3){
           nombre.nextElementSibling.textContent='chachi';
           return true;
       }else{
           nombre.nextElementSibling.textContent='mal';
           return false;
       }
   }

   function validarapellido(apellido){
        var texto=apellido.value.trim();
        if(texto.length==0){
            apellido.nextElementSibling.textContent='mal';
            return false;
        }else{
            apellido.nextElementSibling.textContent='bien';
            return true;
        }
    }

    function validarCod(cod){
        patron =/[0-9]/;
        var texto=cod.value.trim();
        for(let i=0;i<5;i++){
            if(texto.charAt(i)==patron){
                
            }else{
                
            }
        }
        /*if(texto.length!=5){
            cod.nextElementSibling.textContent='mal';
            return false;
        }else{
            
        }*/
    }


   function envio(e){
        e.preventDefault();
       var nombre = document.getElementById('nombre'); 
       var apellido = document.getElementById('apellidos');
       var codPostal = document.getElementById('codPostal');
       var sinombre = validarnombre(nombre);
       var siapellido= validarapellido(apellido)
       var sicod= validarCod(codPostal)
       if(sinombre && siapellido && sicod){
        formulario.submit();
       }
   }
   mover();
   add();
})();	
   
