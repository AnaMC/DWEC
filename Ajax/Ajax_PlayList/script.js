(function() {
    
    //ruta de la peticion
    var url = "https://dwec-anamc.c9users.io/Ajax/Ajax_PlayList/ajaxCanciones.php";
    
    $('#playList').on('submit', function(e){
        e.preventDefault();
        //Datos de los input a Json para
        var parametros = {
            titulo      : $('#titulo').val().trim(),
            interprete       : $('#interprete').val().trim(),
            tipo       : $('#tipo').val().trim()
        };
        miAjax(url, parametros, "POST");
    })
    
    // Con parse "traducimos" el objeto JSON
    // "Traduceme el texto de la peción que está en JSON (está en formato string)"
    //  var objetoJson = JSON.parse(peticion.responseText); 
    
    // Para enviar y poder pedir datos 
  
  // Mediante los parametros definimos que llamada Ajax queremos hacer : UR, , DATOS, TIPO de conexion (Get/Post)  Y el tipo de los datos (Aurora -> con JSon) 
   
   //Le podemos pasar la gungon de callback
    var miAjax = function(url, datos, type) {
        $.ajax({
            url: url,
            data: datos, 
            type: type,
            dataType : 'json',
        })
        
        // Cuando tiene y llega la respuesta de la consulta de ejecuta done, que procesa los datos que le llegan
        .done(function( json ) {
            
            // callBack(json);
            
            mostrar(json.resultado);
        })
        // Se ejecuta si la consuta falla y no obtiene respuesta
        .fail(function( xhr, status, errorThrown ) {
            console.log('petición fallida');
        })
        .always(function( xhr, status ) {
            console.log('ajax always');
        });
    }
    
    //Le pasamos el objeto JSON obtenido
    function mostrar (json) {
        //Sacar el valor del campo 
        let resultado = ' ';
        
        $.each(json, function(cancion , valor) {
        console.log(cancion, valor);
        
          $('#ulCanciones').children().remove();
          resultado += '<li> Titulo: ' + valor.titulo + ' ,Intérprete: '+ valor.interprete + ' ,Género: ' + valor.tipo + '</li>';
          
           //A la lista de canciones se le suma la que se le introduce
           // nuevaCancion += <li>json.titulo</li>
           // cuando tenemos el titulo lo agrgamos 
          
        });
        //Para que sea mas eficiente
        $('#ulCanciones').append(resultado);
    };


 
    
})();