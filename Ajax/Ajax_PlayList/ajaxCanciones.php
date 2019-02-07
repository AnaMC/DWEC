<?php

    require ('Reader.php');
    require ('Session.php');
    require ('Cancion.php');

    //Le pasamos un Objeto Canción para que lo vea (Vamos a hacer una introspeccion)
    // $cancion = Reader::readObject('Cancion');
    $titulo = Reader::read('titulo');
    $tipo = Reader::read('tipo');
    $interprete = Reader::read('interprete');
    $cancion = new Cancion($titulo, $interprete, $tipo);
    $sesion = new Session ('sesion');
        
    //En listaCanciones vamos a guardar las canciones que hay o habrá en la sesión
    $listaCanciones = $sesion->get('canciones');
    
    if($listaCanciones === null){
        //Si no existe creamos el array
        $listaCanciones = array();
        //Y metemos la cancion (xq sabemos que no está)
        $listaCanciones[] = $cancion->get(); 
    }else{
        $repetido = false;
        
        if(!$repetido){
            //Si no esta repetida la metemos
            $listaCanciones[] = $cancion->get();
        }
    }
    //Guardar la lista en la sesion
                // nombre   ,   valor
    $sesion->set('canciones', $listaCanciones);
    
    //Pasamos resultado a Json
    echo json_encode(['resultado' => $listaCanciones]);
?>