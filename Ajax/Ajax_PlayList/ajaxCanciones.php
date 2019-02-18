<?php

    require 'classes/Autoload.php';

    $titulo = Reader::read('titulo');
    $tipo = Reader::read('tipo');
    $interprete = Reader::read('interprete');
    //Recogemos la acción para saber si vamos a añadir, borrar....
    $accion = Reader::read('accion');
    $cancion = new Cancion($titulo, $interprete, $tipo);
   
    //Consultas sql
    $sqlInsert = 'insert into cancion values ( :titulo, :interprete, :tipo)';
    $sqlDelete = 'delete from cancion where titulo = :titulo and interprete = :interprete';
    $sqlGetAll = 'select * from cancion order by titulo';
    $dataBase = new Database();
    
    $resultado = array();

    $resultado['respuesta'] = 0;
    $resultado['canciones'] = array();
    
    switch($accion) {
        case 'insertar':
            //Comprobar conexion BD
            if ($dataBase->connect()) {
                 // Le pasamos el objeto canción como un array asociativo para preparar la sentencia (get)
                 $op = $dataBase->execute($sqlInsert, $cancion->get());
                 
                 if($op === true){
                     $resultado['respuesta'] = 1;
                 } else{
                     $resultado['respuesta'] = 0;
                 }
            }
            break;
            
        case 'delete':
            if ($dataBase->connect()) {
                $datos = $cancion->get();
                //para tener solo titulo e interprete y no pasar mas datos de los necesarios en la sentencia
                unset($datos['tipo']);
                 $op = $dataBase->execute($sqlDelete, $datos);
                 
                 if($op === true){
                     $resultado['respuesta'] = 1;
                 }  
            }
            break;
            
        case 'listar':
             $resultado['respuesta'] = 1;
             break;
    }
    
     //Siempre debemos de volver a comprobar si la bd esta conectada, si respuesta = 1 significa que ha habido un cambio en la BD
     //quitado $resultado['respuesta'] === 1  &&
     if ( $dataBase->connect()) {
         $canciones = [];
         if($dataBase->execute($sqlGetAll)){
            while ($fila = $dataBase->getSentence()->fetch()){
                // Como  $fila = $dataBase ^ significa que hay contenido en la BD (que es un array asciativo) entonces 
                // le metemos a nuestra cancion el contenido utilizando nuestro super trait que lo hace automático
                $cancion->set($fila);
                $canciones[] = $cancion->get();
            }
         }
         $resultado['canciones'] = $canciones;

     }    
    //Pasamos el resultado a Json
    echo json_encode(['resultado' => $resultado]);
?>