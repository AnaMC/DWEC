/*

Ejercicio  3:  
BibliotecaTenemos  tres  tipos  de  medios:  libros,  CDs  y  películas.  Debes  crear  una  clase  principal  llamada  Media  con  tres  subclases:  Libro,  Película  y  CD.  Estas  tres  subclases  tienen  las  siguientes  propiedades  y métodos: 
    LibrosPropiedades: autor(string),titulo(string),paginas(number),prestado(boolean,inicialmentefalse),  y  valoraciones(array,  inicialmentevacío)Getters:  todas  las  propiedades  tienen  un  getterMétodos:.getMediaValoraciones(),.cambiarEstadoPrestado()y  .addValoracion()PelículasPropiedades:director(string),titulo(string),duracion(number),prestado(boolean,  inicialmentefalse),  y  valoraciones(array,  inicialmentevacío)Getters:  todas  las  propiedades  tienen  un  getterMétodos:.  getMediaValoraciones(),.  cambiarEstadoPrestado()  y  .  addValoracion()CDPropiedades:artista(string),titulo(string),prestado(boolean,  inicialmentefalse),  valoraciones(array,  inicialmentevacío)  y  canciones(array  destrings)Getters:  todas  las  propiedades  tienen  un  getterMétodos:.  getMediaValoraciones(),.  cambiarEstadoPrestado()  y.  addValoracion()A  continuación  crea    una  instancia  de  cada  tipo  de  objeto  y  prueba  los  distintos  métodos  y  propiedades.Comprueba  al  añadir  una  valoraciónque  esté  entre  1  y  5Añade  más  propiedades  a  cada  clase.  Por  ejemplo,  añade  un  método  llamado  barajar  a  la  clase  CD  que  devuelve  un  array  ordenado  aleatoriamente  de  todas  las  canciones  de  la  propiedad  canciones.Crea  una  clase  llamada  Catálogo  que  mantiene  todos  los  items  Media  de  la  biblioteca

*/

class Media {
    contruct(titulo, prestado = false, valoraciones) {
        this.titulo = titulo;
        this.prestado = prestado;
        this.valoraciones = valoraciones;
    }

    get titulo() {
        return this.titulo;
    }

    get estadoPrestado() {
        return this.prestado;
    }

    get valoraciones() {
        return this.valoraciones;
    }

    getMediaValoraciones() {
        var totalValoraciones = 0;
        for (let i = 0; i >= this.valoraciones.length; i++) { //this.valoraciones para que coja las valoraciones de SU clase
            totalValoraciones = totalValoraciones + this.valoraciones[i];
        }

        return totalValoraciones / this.totalValoraciones.length;
    }

    cambiarEstadoPrestado() {
        if (this.prestado === false) {
            this.prestado = true;
        }
        else {
            this.prestado = false;
        }
    }

    agregarValoracion(puntuacion) {
        if (puntuacion >= 1 && puntuacion <= 5) {
            this.valoraciones.push(puntuacion); //Con push agregamos valoración a la última posicion del array
        }
    }
}

class Libros extends Media {
    contruct(autor, titulo, paginas, prestado, valoraciones) {
        super(titulo, prestado, valoraciones); // Las que hereda -> con super;
        this.autor = autor;
        this.paginas = paginas;
    }
}

//usar clase

var libro = new Libros();
