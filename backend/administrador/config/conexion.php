<?php
$host="localhost";
$bd="directorio";
$usuario="root";
$contraseña="";

try {
      $conexion=New PDO("mysql:host=$host;dbname=$bd",$usuario,$contraseña);
      if($conexion){echo "conectado al sistema";}
} catch (Exception $ex){
  echo $ex->getMenssage();
}
?>
