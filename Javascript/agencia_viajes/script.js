/*
 *º Al hacer clic sobre el enlace “Ver fotos” aparecerán todas las fotos (previamente están ocultas), al volver a hacer clic desaparecerán.
 * Al modificar el campo "número de noches" de cualquier viaje,  se debe modificar automáticamente el precio (el precio por día está en el span con clase 'tour' correspondiente a ese viaje) .
 * Al pulsar el botón de "reserve ahora", desaparecerá dicho botón y aparecerá en su lugar el mensaje: “Llame al 902 30 30 30 para reservar este viaje”.
 */

(function() {
    var verMas = document.getElementsByClassName("ver-fotos")[0]; //[0] -> verMas es una lista, por lo que tenemos que tratarlo como un array, como solo tenemos 1, la posición es 0
    var fotosUl = document.getElementsByClassName("fotos")[0];
    
    var btnReserva = document.getElementsByClassName("book");

    function visibilidad() {
        fotosUl.classList.toggle("fotos");
    }

    function llamada(e){
         btnReserva.disabled = true;
         btnReserva.innerText = "Llame al 902 30 30 30 para reservar este viaje";
         btnReserva.classList.add('telefono');
    }

    verMas.addEventListener('click', visibilidad);
    btnReserva.addEventListener('click', llamada);
})();
