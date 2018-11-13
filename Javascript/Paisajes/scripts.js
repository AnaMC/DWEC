(function(){
    var playas = document.getElementById('playas');
    var montañas = document.getElementById('montañas');
    var imagen = document.querySelector('.imagen img');
    
    playas.addEventListener('click', mostrarPlayas);
    montañas.addEventListener('click', mostrarMontañas);
    
    var listaPlayas = playas.nextElementSibling.firstElementChild.querySelectorAll('li');
    var listaMontañas = montañas.nextElementSibling.firstElementChild.querySelectorAll('li');
    
     
    for (var i = 0; i < listaPlayas.length; i++){
        listaPlayas[i].addEventListener('click', cambiaFoto);
    }
    
    for (var i = 0; i < listaMontañas.length; i++){
        listaMontañas[i].addEventListener('click', cambiaFoto);
    }
    
    function mostrarPlayas(){
        playas.nextElementSibling.classList.toggle('esconder');
        imagen.classList.toggle('esconder');
    }
    
    function mostrarMontañas(){
        montañas.nextElementSibling.classList.toggle('esconder');
    }
    
    function cambiaFoto(event){
        var string = this.innerText.toLowerCase();
        imagen.setAttribute("src", "img/"+string+".jpg");
    }
    
}());