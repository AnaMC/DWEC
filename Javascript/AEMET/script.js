// $(global);

/*
        PARA COMPROBAR SI NUESRO NAVEGADOR SOPORTA FETCH O NO
        
        if (self.fetch) {
            // Si soporta fetch lo hara de esta manera
         } else {
            // Si no soporta fetch lo hace de esta otra
        }


*/




// var extracted1 = (function () {

(function() {
	var url = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/18087/	?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cm9nbG9kaXRhOTFAZ21haWwuY29tIiwianRpIjoiN2QwMDYzYmUtOTYyOC00YjViLWE4ZmEtYjI0ODhhYWNhYzIzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NDc0NjQyMTQsInVzZXJJZCI6IjdkMDA2M2JlLTk2MjgtNGI1Yi1hOGZhLWIyNDg4YWFjYWMyMyIsInJvbGUiOiIifQ.gXl-EozUxlb2uiAU21RMIoLV6y7XuYMX0woFGKTwshs";

	var solicitud = new XMLHttpRequest();
	solicitud.open("GET", url);

	solicitud.onload = function() {
		if (solicitud.status == 200) { //Código	de	respuesta	OK
			//Creamos un objeto donde se guarde esta información, la cual tiene que estar en JSON para que se procese, para esto hacemos  un JSON.parse
			//responseText es la parte de la solicitud que contiene la información
			var objetoJson = JSON.parse(solicitud.responseText);

			//Segunda solicitud

			var solicitud2 = new XMLHttpRequest();
			solicitud2.open("GET", obj.datos); // Abro peticion y le digo que es de tipo get y le paso mi url 

			solicitud2.onload = function() {

				if (solicitud2.status == 200) {
					var obj2 = JSON.parse(solicitud2.responseText);
					pintar(obj2);
				}
			}
			solicitud2.send(null);
		}
	}

	solicitud.send(null);


	function mostrarTabla(obj2) {
		var tabla = document.getElementById('tabla');
		
		obj2[0].prediccion.dia.forEach(function(elemento) {
			
			var columnas = document.createElement(`
	    		<tr>
	    			<td class="blue">Dia</td>
	    			<td class="blue">Probalidad de Lluvia</td>
	    			<td class="blue">Humedad Relativa</td>
	    			<td class="blue">Viento</td>
	    			<td class="blue">Temperatura en grados</td>
	    		</tr>
	    		<tr>
		    		<td>	
		   				${elemento.fecha}
		    		</td>
		    		<td>	
		   				${elemento.probPrecipitacion[0].value}
		    		</td>
		    		<td>	
		   				Máxima: ${elemento.humedadRelativa.maxima} - Mínima ${elemento.humedadRelativa.minima}
		    		</td>
		    		<td>	
		   				${elemento.viento[0].velocidad}
		    		</td>
		    		<td>	
		   				Máxima: ${elemento.temperatura.maxima} Grados - Mínima: ${elemento.temperatura.minima} Grados
		    		</td>
	    		</tr>
    		`);
    		
    		tabla.appendChild(columnas);
		});
	}
});
