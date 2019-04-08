(function() {

    var descuento = Math.floor((Math.random() * 100) + 1);
    var resultado = document.getElementById('resultado');
    var main = document.getElementById('main');
    var posicion = Math.floor(Math.random() * 3);
    var imagen = document.getElementsByTagName('img')[posicion];

    function buscar(e) {

        if (imagen === e.target) {
            resultado.innerText = 'Tienes un descuento del ' + descuento + ' %';
        } else {
            resultado.innerText = 'Lo siento, no has ganado nada';
        }
        main.removeEventListener('click', buscar);
    }

    main.addEventListener('click', buscar);

}());
