<?php

// require('Common.php');

class Cancion {

    use Common;

    private  $titulo, $interprete, $tipo;
    
    function __construct($titulo = null, $interprete = null, $tipo = null) {
        $this->titulo = $titulo;
        $this->interprete = $interprete;
        $this->tipo = $tipo;
    }

    function getTitulo() {
        return $this->titulo;
    }

    function getInterprete() {
        return $this->interprete;
    }

    function getTipo() {
        return $this->tipo;
    }

    function settitulo($titulo) {
        $this->titulo = $titulo;
    }

    function setinterprete($interprete) {
        $this->interprete = $interprete;
    }

    function settipo($tipo) {
        $this->tipo = $tipo;
    }
}