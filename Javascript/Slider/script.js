(function() {

    var grande = document.getElementById('grande');
    var lista = document.getElementsByClassName('img');
    var contador = 0;

    for (var i = 0; i < lista.length; i++) {
        lista[i].addEventListener('click', cambio);
    }

    function cambio(e) {
        grande.src = e.target.src;

       limpiarOpacity();
        e.target.style.opacity = '0.5';
    }

    var auto = setInterval(
        function() {
            contador = (contador + 1) % lista.length;
            imagen = lista[contador];
            grande.src = imagen.src;
            limpiarOpacity();
            lista[contador].style.opacity = '0.5';
            
        }, 2000);
        
    function limpiarOpacity(){
         for (var i = 0; i < lista.length; i++) {
            //con clases
            lista[i].style.opacity = '1';
        }
    }
}());
