(function() {

    document.getElementById('playList').addEventListener('submit', anadir);

    function anadir(e) {
        e.preventDefault();
        var cancion = document.getElementById("cancion").value;
        var lista = document.getElementById('ulCanciones');
        var nuevaCancion = document.createElement("li");
        nuevaCancion.setAttribute("class", "lista");
        nuevaCancion.textContent = cancion + ' \n ';
        //Creamos la papelera
        var trash = document.createElement("img");
        trash.setAttribute("src", "trash.png");
        trash.setAttribute("id", "trash");
        trash.addEventListener('click', function() {
            if (confirm('borrar?')) {
                this.parentNode.remove();
            }
        });
        nuevaCancion.appendChild(trash);

        if (lista.children.length === 0) {
            lista.appendChild(nuevaCancion);
        } else {
            var elementos = lista.children;
            var ordenado = false;
            
            for (var i = 0; i < elementos.length && !ordenado; i++) {
                if (elementos[i].textContent > nuevaCancion.textContent) {
                    ordenado = true;
                    lista.insertBefore(nuevaCancion, lista.children[i]);
                }
            }
            
            if (!ordenado) {
                lista.appendChild(nuevaCancion);
            }
            
            // if (nuevaCancion.textContent < elementos[0].textContent) {
            //     lista.insertBefore(nuevaCancion, lista.children[0]);
            // } else {
            //     for (var i = 0; i < elementos.length; i++) {
            //         if (nuevaCancion.textContent > elementos[i].textContent) {
            //             insertAfter(nuevaCancion, lista.children[i]);
            //         }
            //     }
            // }
        
    }
}
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    
    function buscar (){
        
        var busqueda = document.getElementById('busqueda').value;
        var lista = document.getElementById('ulCanciones');
        var elementos = lista.children;
        var error = document.getElementById('error');
        
        
        for( var i = 0; i < elementos.length; i++){
            if(elementos[i].textContent.includes(busqueda)){  //includes -> determina si hay un elemento dentro de otro
                
                //Estrella de búsqueda
                var star = document.createElement("img");
                star.setAttribute("src", "star.png");
                star.setAttribute("id", "star");
                elementos[i].appendChild(star);
               
            }else{
                // error.textContent = "La canción " +  busqueda + " no existe en la lista";
            }
        }
    }
    
    document.getElementById('playList').addEventListener('submit', anadir);
    document.getElementById('buscar').addEventListener('click', buscar);
    
})();