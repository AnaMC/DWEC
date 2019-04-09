(function() {
    
    var listadoImagenes = document.getElementById("imagenes");
    var titulo = document.getElementById("titulo");
    var imagenNodo = document.getElementById("imagen");
    var enlaces = listadoImagenes.getElementsByTagName("a");
    
    var nodoEnlace;
    var imagen;
    
    var misImagenes = [];
    var contadorImagen = 0;
    
    for (var i = 0; i < enlaces.length; i++) {
        nodoEnlace = enlaces[i];
        imagen = document.createElement('img');
        imagen.src = nodoEnlace.getAttribute("href");
        imagen.title = nodoEnlace.getAttribute("title");
        // .push ->  añade uno o más elementos al final de un array y devuelve la nueva longitud 
        misImagenes.push(imagen);
    }

    var timer = setInterval(
        function() {
            contadorImagen = (contadorImagen + 1) % misImagenes.length;
            imagen = misImagenes[contadorImagen];
            imagenNodo.src = imagen.src;
            titulo.textContent = imagen.title;
        }, 2000);
}());