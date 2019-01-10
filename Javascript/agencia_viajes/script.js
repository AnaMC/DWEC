/*
 *º Al hacer clic sobre el enlace “Ver fotos” aparecerán todas las fotos (previamente están ocultas), al volver a hacer clic desaparecerán.
 * Al modificar el campo "número de noches" de cualquier viaje,  se debe modificar automáticamente el precio (el precio por día está en el span con clase 'tour' correspondiente a ese viaje) .
 * Al pulsar el botón de "reserve ahora", desaparecerá dicho botón y aparecerá en su lugar el mensaje: “Llame al 902 30 30 30 para reservar este viaje”.
 */

(function() {
    var verMas = document.getElementsByClassName("ver-fotos")[0]; //[0] -> verMas es una lista, por lo que tenemos que tratarlo como un array, como solo tenemos 1, la posición es 0
    var fotosUl = document.getElementsByClassName("fotos")[0];
    var tour = document.getElementById("tours");
    var btnReserva = document.getElementsByTagName("button");
    
    for(var i = 0; 1 < btnReserva.length; i++){
        btnReserva[i].addEventListener('click', reserva);
    }    
    
    function visibilidad() {
        fotosUl.classList.toggle("fotos");
    }

    function reserva(e){
        var btn = e.currentTarget;
        btn.classList.add('telefono');
        btn.disabled = true;
        btn.innerText = "Llame al 902 30 30 30 para reservar este viaje";
    }

    // function precio(e){
    //     var campoNoches = e.target.value;
    // }

    verMas.addEventListener('click', visibilidad);
    // tour.addEventListener('change', precio);
    
})();
