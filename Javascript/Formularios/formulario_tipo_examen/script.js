(function() {

    var form = document.getElementById('form');
    var npreguntas = document.getElementsByTagName('label').length;
    var ayuda = document.getElementById('ayuda');
    var textArea = document.getElementById('textareaComent');
    var crono = document.getElementById("crono");

    var fecha = new Date();
    var contestadas = 0;
    var acertadas = 0;
    var intentos = 0;
    var segundos = 0;
    var tiempo;
    starTime();

    //Fecha y cronómetro
    document.getElementById("fecha").innerText = 'Fecha: ' + fecha.getDay() + ' / ' + fecha.getMonth() + ' / ' + fecha.getFullYear();

    function starTime() {
        tiempo = window.setInterval(function() {
            segundos++;
            if (intentos === 0) {
                actualizarStarTime();
            }

        }, 1000);
    }

    function actualizarStarTime() {
        if (segundos < 60) {
            crono.innerText = segundos + ' segundos';
        }
        else {
            var minutos = segundos / 60;
            var segundos2 = segundos % 60;

            crono.innerText = Math.round(minutos) + ' minuto' + ' y ' + segundos2 + ' segundos';

            if (Math.round(minutos) > 1) {
                document.getElementById("tiempo").style.color = "red";
                crono.innerText = Math.round(minutos) + ' minutos' + ' y ' + segundos2 + ' segundos';
            }
        }
    }

    function intentosBtn() {
        var btn = document.getElementById('enviar');

        if (intentos === 1) {
            btn.value = 'Reintentar';

        }

        if (acertadas === npreguntas) {
            btn.disabled = true;
        }
    }

    function respSN() {

        var textSN = document.getElementById('textareaSN').value;
        var respuesta = textSN.toLowerCase();

        if (respuesta === 's' || respuesta === 'si') {

            acertadas++;
            contestadas++;
            ayuda.style.color = "#818181";

        }
        else if (respuesta === 'n' || respuesta === 'no') {

            contestadas++;
            ayuda.style.color = "#818181";

        }
        else {
            ayuda.style.color = "red";
        }

        if (respuesta === '') {
            ayuda.style.color = "#818181";
        }
    }

    function contadorTextArea() {
        //        var textArea = document.getElementById('textareaComent');
        var maxTextAtrea = textArea.getAttribute("maxlength");
        var disponibles = document.getElementById('disponibles');
        var restantes = maxTextAtrea - textArea.value.length;

        disponibles.innerText = 'Caracteres disponibles: ' + restantes;

    }

    function validarRadio(name, correcta) {
        var respuesta = document.getElementsByName(name);

        for (var i = 0; i < respuesta.length; i++) {
            if (respuesta[i].checked) {
                contestadas++;
                if (respuesta[correcta - 1].checked) {
                    acertadas++;
                }
            }
        }
    }

    function validarCheckbox(name, correcta1, correcta2) {
        var campo = document.getElementsByName(name);
        let contadorCheck = 0;
        let contadorAcertadas = 0;

        for (var i = 0; i < campo.length; i++) {
            if (campo[i].checked) {
                contadorCheck++;

                if (i === correcta1 - 1 || i === correcta2 - 1) {

                    contadorAcertadas++;
                }
            }
        }

        if (contadorAcertadas === 2 && contadorCheck === 2) {
            acertadas++;
        }

        if (contadorCheck > 0) {
            contestadas++;
        }
    }

    function validarLista(name, valor) {
        var respuesta = document.getElementById(name);
        var indiceRespuesta = respuesta.selectedIndex; //Devuelve el [i] de la seleccionada :D

        if (indiceRespuesta != 0) {
            contestadas++;
            if (indiceRespuesta === valor - 1) {
                acertadas++;
            }
        }
    }

    function porcenAciertos() {
        var spanPorcentajeAciertos = document.getElementById("porcentajeAciertos");
        var porcen = Math.round((acertadas * 100) / npreguntas);
        spanPorcentajeAciertos.innerText = 'Porcentaje de aciertos: ' + porcen + '%';

        var sticker = document.createElement("img");
        sticker.setAttribute("id", "sticker");

        if (porcen === 100) {
            sticker.setAttribute("src", "star.png");
            spanPorcentajeAciertos.appendChild(sticker);
        }

        if (porcen < 50) {
            sticker.setAttribute("src", "sad.png");
            spanPorcentajeAciertos.appendChild(sticker);
        }

    }


    function borrarCampos() {
        contestadas = 0;
        acertadas = 0;
    }

    function correccion(e) {
        e.preventDefault();
        
        actualizarStarTime();
        borrarCampos();
        clearInterval(tiempo);
        starTime();
        
        respSN();
        
        validarRadio("p1", 3);
        validarRadio("p2", 2);
        validarRadio("p5", 1);
        validarRadio("p7", 1);
        validarRadio("p8", 3);
        validarRadio("p9", 3);
        validarRadio("p10", 2);
        
        validarCheckbox("p4", 1, 2);

        validarLista("lista", 3);

        intentos++;
        intentosBtn();

        porcenAciertos();

        var erroneas = contestadas - acertadas;
        var restantes = npreguntas - contestadas;

        var spanTotales = document.getElementById("totales");
        var spanContestadas = document.getElementById("contestadas");
        var spanRestantes = document.getElementById("restantes");
        var spanAcertadas = document.getElementById("acertadas");
        var spanErroneas = document.getElementById("erroneas");
        var spanIntentos = document.getElementById("intentos");


        spanTotales.innerText = 'Preguntas totales: ' + npreguntas;
        spanContestadas.innerText = 'Contestadas: ' + contestadas;
        spanRestantes.innerText = 'Restantes: ' + restantes;
        spanAcertadas.innerText = 'Acertadas: ' + acertadas;
        spanErroneas.innerText = 'Erroneas: ' + erroneas;
        spanIntentos.innerText = 'Intentos: ' + intentos;

    }

    function resetar(e) {
        if (e.target.getAttribute("type") !== "reset") { // mira el tipo de lo que se ha pulsado, si no es reset se sale
            return;
        }
        if (!confirm("¿Seguro que deseas borrar?")) {
            e.preventDefault();
            borrarCampos();
        }
    }

    textArea.addEventListener('keydown', contadorTextArea);
    form.addEventListener('submit', correccion);
    form.addEventListener('click', resetar);

})();
