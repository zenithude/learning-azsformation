<?php 
// Nous instancions un objet PDO qui contiendra la connexion
$connexion = new PDO(
    "mysql:host=localhost;dbname=<DB_NAME>;charset=utf8", 
    "<IDENTIFIANT>",
    "<MOT DE PASSE>"
);
?>