//if prestado

var libro1 = new Libro ('Patrick Rothfuss', 1200, 'El nombre del viento');
var libro2 = new Libro ('Saint Exupery', 200, 'El Principito');
var libro3 = new Libro ('Dan Brown', 900, 'El código Da Vinci');

libro1.addValoracion(5);
libro1.addValoracion(20); // ¡¡Bien, la validacion funciona, no lo tiene en cuenta!!

libro2.addValoracion(5);
libro2.addValoracion(4);

libro3.addValoracion(3);
libro3.addValoracion(2);

console.log (' ');
console.log (' Libros ');
console.log (' ');

console.log('El libro es: ' + libro1.titulo + ' escrito por ' + libro1.autor + ' con una valoración de ' + libro1.valoraciones + ' estrellas.');
console.log('El libro es: ' + libro2.titulo + ' escrito por ' + libro2.autor + ' con una valoración MEDIA de ' + libro2.mediaValoraciones() + ' estrellas.');
console.log('El libro es: ' + libro3.titulo + ' escrito por ' + libro3.autor + ' con una valoración MEDIA de ' + libro3.mediaValoraciones() + ' estrellas.');

var peli1 = new Peliculas ('Bryan Singer', 2, 'Bohemian Rhapsody');

peli1.addValoracion(5);
peli1.addValoracion(4);

console.log (' ');
console.log (' Películas ');
console.log (' ');

console.log('La película es: ' + peli1.titulo + ' dirigida por ' + peli1.director + ' con las valoraciones ' + peli1.valoraciones + ' y una una valoración MEDIA de ' + peli1.mediaValoraciones() +' estrellas');

var cd1 = new Cd ('Guns & Roses', 'Appetite for destruction');
var cd2 = new Cd ('Estopa','Voces de ultratumba');

cd1.addValoracion(5);

cd2.addValoracion(5);
cd2.addValoracion(2);

console.log (' ');
console.log (' Música ');
console.log (' ');


console.log('El Disco es: ' + cd1.titulo + ' interpretado por ' + cd1.artista + ' con una valoración de ' + cd1.valoraciones + ' estrellas.');
console.log('El Disco es: ' + cd2.titulo + ' interpretado por ' + cd2.artista + ' con una valoración de ' + cd2.valoraciones + ' y una valoración MEDIA de ' + cd2.mediaValoraciones() + ' estrellas.');
