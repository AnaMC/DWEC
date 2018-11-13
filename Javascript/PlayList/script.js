(function() {

    document.getElementById('playList').addEventListener('submit', anadir);

    function anadir(e) {
        e.preventDefault();
        var cancion = document.getElementById("cancion").value;
        var lista = document.getElementById('ulCanciones');
        var nuevaCancion = document.createElement("li");
        
        nuevaCancion.setAttribute("class", "lista");
        nuevaCancion.textContent = cancion + ' \n ';
        
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
    }
}
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    
    document.getElementById('playList').addEventListener('submit', anadir);
    
    
})();