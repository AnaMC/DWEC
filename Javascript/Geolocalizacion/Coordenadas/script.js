(function() {

    var destinos = document.querySelectorAll('.destino');
    var distancia = document.getElementById('distancia');
    var destinoClick = new Array();
    var miLatitud = 0;
    var miLongitud = 0;

    for (let i = 0; i < destinos.length; i++) {
        destinos[i].addEventListener('click', function(e) {
            destinoClick = { desLatitude: e.target.dataset.latitud, desLongitude: e.target.dataset.longitud };

            var datos_des = document.getElementById('datos_des');
            datos_des.innerText = ' Longitud del destino: ' + destinoClick["desLongitude"] + ' y Latitud del destino: ' + destinoClick["desLatitude"];
            var m = calcularDistancia();
            distancia.innerText = 'Te quedan ' + m + ' metros para llegar a tu destino.';

        });
    }

    //Comprobación de soporte geolocolizacion navegador
    if (navigator.geolocation) {
        //Funciones de exito, error y opciones (opcional)
        navigator.geolocation.getCurrentPosition(exito, error, opciones);
    }

    //ubicacion lo recoge automáticamente de lo que devuelve ↑
    function exito(ubicacion) {
        miLatitud = ubicacion.coords.latitude;
        miLongitud = ubicacion.coords.longitude;
        var info = document.getElementById('info');

        info.innerText = 'Estás en ' + miLatitud + ', latitud y ' + miLongitud + ' longitud.';

        return ubicacion;
    }

    function error(error) {
        var tiposError = {
            0: "Error desconocido",
            1: "Permiso denegado por el usuario",
            2: "Posicion no disponible",
            3: "Tiempo excedido"
        };
        var mensajeError = tiposError[error.code];
        if (error.code === 0 || error.code === 2) {
            mensajeError = mensajeError + " " + error.message;
        }
        var div = document.getElementById("situacion");
        div.textContent = mensajeError;
    }

    var opciones = {
        enableHighAccuracy: true, // Especifica si queremos la máxima exactitud posible
        maximumAge: 40000, // Tiempo de expiración de la ubicación en caché
        timeout: 2000 // Número de milisegundos máximos de espera de respuesta
    }

    var calcularDistancia = function() {
        var Radio = 6371; // radio de la Tierra en Km
        var miLatitudRad = gradosARadianes(miLatitud);
        var miLongitudRad = gradosARadianes(miLongitud);
        var desLongitudeRad = gradosARadianes(destinoClick["desLongitude"]);
        var desLatitudeRad = gradosARadianes(destinoClick["desLatitude"]);
        var distancia = Math.acos(Math.sin(miLatitudRad) * Math.sin(desLatitudeRad) + Math.cos(miLatitudRad) * Math.cos(desLatitudeRad) * Math.cos(miLongitudRad - desLongitudeRad)) * Radio;
        return Math.round(distancia * 100) / 100;
    }

    var gradosARadianes = function(grados) {
        var radianes = (grados * Math.PI) / 180;
        return radianes;
    }

})();