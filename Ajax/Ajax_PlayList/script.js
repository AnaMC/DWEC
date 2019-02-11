(function() {
    
    //Ruta de la peticion Ajax
    var url = "https://dwec-anamc.c9users.io/Ajax/Ajax_PlayList/ajaxCanciones.php";
    
    $('#playList').on('submit', function(e){
        e.preventDefault();
        // Objeto javascript para Json
        var parametros = {
            titulo      : $('#titulo').val().trim(),
            interprete       : $('#interprete').val().trim(),
            tipo       : $('#tipo').val().trim(),
            accion     : 'insertar'
        };
        miAjax(url, parametros, "POST");
    })

    // Con parse "traducimos" el objeto JSON
    // "Traduceme el texto de la peción que está en JSON (está en formato string)"
    //  var objetoJson = JSON.parse(peticion.responseText); 
    
    // Para enviar y poder pedir datos 
  
    // Mediante los parametros definimos que llamada Ajax queremos hacer : UR, , DATOS, TIPO de conexion (Get/Post)  Y el tipo de los datos (Aurora -> con JSon) 
   
   // Le podemos pasar la función de callback
    var miAjax = function(url, datos, type) {
        $.ajax({
            url: url,
            data: datos, //ya Convertido a Json (por ser la funcion de ajax Jquery)
            type: type,
            dataType : 'json',
        })
        
        // Cuando tiene y llega la respuesta de la consulta de ejecuta done, que procesa los datos que le llegan
        .done(function( json ) {
            
        // callBack(json);
            //Si respuesta es = 1 es xq se ha cambiado la bd, entonces lo listamos
            if(json.resultado.respuesta = 1){
                mostrar(json.resultado.canciones);    
            }
        })
        // Se ejecuta si la consuta falla y no obtiene respuesta
        .fail(function( xhr, status, errorThrown ) {
            console.log('petición fallida');
        })
        .always(function( xhr, status ) {
            console.log('Petición realizada');
        });
    }
    
    //Le pasamos el objeto JSON obtenido que es un array de canciones
    function mostrar (json) {
        //Sacar el valor del campo 
        let resultado = ' ';
         $('#ulCanciones').children().remove();
                           // indice , valor
        $.each(json, function(cancion , valor) {
        console.log(cancion, valor);
        
          //data-nombre atributo para guardad el nombre para poder recogerlo en la peticion de y no tratamos el string
          // APUNTES CARMELO
           resultado += '<li class="estilo" data-titulo="' + valor.titulo + '" data-interprete="' + valor.interprete + '">' + valor.titulo + ' / '  +  valor.interprete + ' / ' + valor.tipo + ' ' +'<a href = "#" class="remove">Eliminar </a> </li>';
          
           //A la lista de canciones se le suma la que se le introduce
           // nuevaCancion += <li>json.titulo</li>
           // cuando tenemos el titulo lo agrgamos 
          
        });
        //Para que sea mas eficiente
        $('#ulCanciones').append(resultado);
        
        //Pasar solo lo que necesitamos
        $('.remove').on('click', function(e){
            
            e.preventDefault();
            
            var parametros = {
                titulo      :     $(e.currentTarget).parent().attr('data-titulo'),
                interprete  :     $(e.currentTarget).parent().attr('data-interprete'),
                accion      :     'delete'
            };
            miAjax(url, parametros, "POST");  
        });
    };
    
//Se ejecuta la primera vez que se abre la página ¡No tiene evento!
    var parametros = {
            titulo: '',
            interprete: '',
            tipo: '',
            accion: 'listar'
        };
    miAjax(url, parametros, 'post');
})();