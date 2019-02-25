/*

Ejercicio  3:  

Biblioteca Tenemos  tres  tipos  de  medios:  libros,  CDs  y  películas.  

Debes  crear  una  clase  principal  llamada  Media  con  tres  subclases:  Libro,  Película  y  CD.  

Estas  tres  subclases  tienen  las  siguientes  propiedades  y métodos: 
    
Libros Propiedades: autor(string),titulo(string),paginas(number),prestado(boolean,inicialmentefalse),  y  valoraciones(array,  inicialmentevacío)
    Getters:  todas  las  propiedades  tienen  un  getter
    Métodos:.getMediaValoraciones(),.cambiarEstadoPrestado() y  .addValoracion()
    
    
    
Películas Propiedades:director(string),titulo(string),duracion(number),prestado(boolean,  inicialmentefalse),  y  valoraciones(array,  inicialmentevacío)
    Getters:  todas  las  propiedades  tienen  un  getter
    Métodos:.  getMediaValoraciones(),.  cambiarEstadoPrestado()  y  .  addValoracion()
    
CD Propiedades:artista(string),titulo(string),prestado(boolean,  inicialmentefalse),  valoraciones(array,  inicialmentevacío)  y  canciones(array  destrings)
    Getters:  todas  las  propiedades  tienen  un  getter
    Métodos:.  getMediaValoraciones(),.  cambiarEstadoPrestado()  y.  addValoracion()
    
A  continuación  crea    una  instancia  de  cada  tipo  de  objeto  y  prueba  los  distintos  métodos  y  propiedades.

Comprueba  al  añadir  una  valoraciónque  esté  entre  1  y  Añade  más  propiedades  a  cada  clase.  

Por  ejemplo,  añade  un  metodo  llamado  barajar  a  la  clase  CD  que  devuelve  un  array  ordenado  aleatoriamente  de  todas  las  canciones  de  la  propiedad  canciones. 
Crea  una  clase  llamada  Catálogo  que  mantiene  todos  los  items  Media  de  la  biblioteca

*/

class Media {
    constructor(titulo, prestado = false, valoraciones = new Array()) {
        this._titulo = titulo;
        this._prestado = prestado;
        this._valoraciones = valoraciones;
    }

    get titulo() {
        return this._titulo;
    }

    get prestado() {
        return this._prestado;
    }

    get valoraciones() {
        return this._valoraciones;
    }

    cambiarEstadoPrestado() {
        return this._prestado = !this._prestado // cuando hacemos asignaciones ! significa lo contrario, por lo que si está en false lo pasará a true y viceversa
    }

    addValoracion(valor) {
        if (!isNaN(valor) && valor >= 0 && valor <= 5) {
            this._valoraciones.push(valor);
            return 1;
        }
        return 0;
    }

    mediaValoraciones() {
        var total = 0;

        for (let i = 0; i < this._valoraciones.length; i++) {
            total += this._valoraciones[i]; // total += 1 -> lo que tiene +1
        }
        //Con Math.round(x) podemos redondear a la baja
        return Math.round(total / this._valoraciones.length);
    }
}

class Libro extends Media {
    constructor(autor, paginas, titulo, prestado = false, valoraciones = new Array()) {
        super(titulo, prestado, valoraciones);
        this._autor = autor;
        this._paginas = paginas;
    }

    get autor() {
        return this._autor;
    }

    get paginas() {
        return this._paginas;
    }
}

class Peliculas extends Media{
    constructor(director, duracion, titulo, prestado = false, valoraciones = new Array() ){
        super(titulo,prestado,valoraciones);
        this._director = director;
        this._duracion = duracion;
    }
    
    get director(){
        return this._director;
    }
    
    get duracion(){
        return this._duracion;
    }
}

class Cd extends Media{
    constructor (artista, titulo, prestado = false, valoraciones = new Array()){
        super(titulo, prestado, valoraciones);
        this._artista = artista;
    }
    
    get artista(){
        return this._artista;
    }
    
    //barajar
}

//Crea  una  clase  llamada  Catálogo  que  mantiene  todos  los  items  Media  de  la  biblioteca

class Catalogo{
    constructor(){
        //Elementos seran media.....
        this._elementos = new Array();
    }
    
    get elementos(){
        return this._elementos;
    }
    
    addElementos(elementos){
        //comprobanmo si es una instancia de media.... con instance of
        
       if(elementos instanceof Media){
           console.log('Ey');
       }
    }

}


