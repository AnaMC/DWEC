<!DOCTYPE HTML>
<html lang="es">

<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Ejercicio de clase playlist">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="png" href="img/music-player.png" />
    <script
		  src="https://code.jquery.com/jquery-3.3.1.min.js"
		  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
		  crossorigin="anonymous">
    </script>
    <title>- Playlist -</title>
</head>

<body>
	<h1 class="titulo">Lista de canciones 
	<br>
	¡ Introduce tu favorita !</h1>
	
	<form id='playList'>
	    <br>
	    <br>
		<input type="text" id="titulo" placeholder="Nombre de la canción">
		<input type="text" id="interprete" placeholder="Intérprete">
		<input type="text" id="tipo" placeholder="Género">
		<input type="submit" id="anadir" value='Añadir Canción'>
	</form>
	<br>
    <br>
    <br>
	</ul>
	<ul id="ulCanciones">
	     <!--Creamos el <li></li> desde el script -->
	</ul>
	
	<script src="script.js"></script>
</body>

</html>
