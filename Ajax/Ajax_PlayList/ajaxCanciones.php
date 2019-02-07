<?php

    require 'classes/Autoload.php';

    //Le pasamos un Objeto Canción para que lo vea (Vamos a hacer una introspeccion)
    // $cancion = Reader::readObject('Cancion');
    $titulo = Reader::read('titulo');
    $tipo = Reader::read('tipo');
    $interprete = Reader::read('interprete');
    $cancion = new Cancion($titulo, $interprete, $tipo);
    $sesion = new Session ('sesion');
     
    //Consultas sql
    $sqlInsert = 'insert into cancion values (null, :titulo, :interpte, :genero)';
    $sqlDelete = 'delete from cancion where id = :id';
    $dataBase = new Database();
    $resultado = 0;    
    //En listaCanciones vamos a guardar las canciones que hay o habrá en la sesión
    $listaCanciones = $sesion->get('canciones');
    
    //Comprobar conesxion BD
    if ($db->connect()) {
        $conexion = $dataBase->getConnection();
        // 
        // 
    } else {
        echo 'Conexión fallida';
        //Y nos vamos
        exit();
    }
    
    if($listaCanciones === null){
        //Si no existe creamos el array
        $listaCanciones = array();
        //Y metemos la cancion (xq sabemos que no está)
        $listaCanciones[] = $cancion->get(); 
    }else{
        $repetido = false;
        
        //in_array -> buscamos para saber si está
        //Sort -> ordenar
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