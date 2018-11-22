
/* POP Y SHIFT borran , el ejercicio pide devolver ---Corregir--- */


Array.prototype.ultimo = function(){
    //pop brorra el eultimo delemento de la página (es una propiedad del array)
    return this[0];
}

Array.prototype.primero = function(){
    //shift brorra el primer delemento de la página (es una propiedad del array)
    //Molaría ás hacerlo con un bucle for, los recorremos todos y vamos borrando uno a uno
    
    return this[this.length - 1];
}

Array.prototype.limpia = function(){
    //A splice le indicamos el inicio y la posicion final y borra el contenido
    this.splice(0,this.length);
    return this;
}