<?php

// namespace usuarios\database;

// use usuarios\app\App;

/*
    El constructor debe tener al menos 3 parametros: host, usuario y clave
*/

class Database {
    
    //Atributos
    private $host,
            $user,
            $password,
            $database,
            $connection,
            $sentence;
    
    // Constructor
    function __construct($user = null, $password = null, $database = null, $host='localhost') {
        $this->user = 'playlist';
        $this->password = 'clavebd';
        $this->database = 'playList';
        $this->host = $host;
    }
    
    function connect(){
        $result = false;
        try {
            $this->connection = new \PDO(
              'mysql:host=' . $this->host . ';dbname=' . $this->database,
              $this->user,
              $this->password,
              array(
                \PDO::ATTR_PERSISTENT => true,
                \PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8')
            );
            
            $result = true;
        } catch(\PDOException $e) {
            //echo $e->getMessage();
            //echo '<pre>' . var_export($this->connection->errorInfo(), true) . '</pre>';
        }
        return $result;
    }

    function close(){
        $this->connection = null;
    }
    
    // Get y Set
    
    function getConnection() {
        return $this->connection;
    }
    
    function getSentence() {
        return $this->sentence;
    }
    
    function execute($sql, array $data = array()) {
        $this->sentence = $this->connection->prepare($sql);
        foreach($data as $nombreParametro => $valorParametro) {
            $this->sentence->bindValue($nombreParametro, $valorParametro);
        }
        //Si se hace la inserción devuelve true/false
        return $this->sentence->execute();
    }
}