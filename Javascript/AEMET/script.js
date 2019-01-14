var extracted1 = (function () {

    var url = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/18087/	?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cm9nbG9kaXRhOTFAZ21haWwuY29tIiwianRpIjoiN2QwMDYzYmUtOTYyOC00YjViLWE4ZmEtYjI0ODhhYWNhYzIzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NDc0NjQyMTQsInVzZXJJZCI6IjdkMDA2M2JlLTk2MjgtNGI1Yi1hOGZhLWIyNDg4YWFjYWMyMyIsInJvbGUiOiIifQ.gXl-EozUxlb2uiAU21RMIoLV6y7XuYMX0woFGKTwshs";

    var solicitud = new XMLHttpRequest();
    solicitud.open("GET", url);

    solicitud.onload = function () {
        if (solicitud.status == 200) { //Código	de	respuesta	OK
           //Creamos un objeto donde se guarde esta información, la cual tiene que estar en JSON para que se procese, para esto hacemos  un JSON.parse
            //responseText es la parte de la solicitud que contiene la información
            var objetoJson = JSON.parse(solicitud.responseText);
            alert(solicitud.responseText);
            
        }
    };
    
    
});
