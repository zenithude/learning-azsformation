<?php 
/**
 * Pour que ce fichier fonctionne sur votre machine remplacez 
 * <DB_NAME>, <IDENTIFIANT> et <MOT DE PASSE> 
 * Par vos informations de connexion à votre serveur de BDD 
**/

try {
    $connexion = new PDO(
        "mysql:host=localhost;dbname=<DB_NAME>;charset=utf8", 
        "<IDENTIFIANT>",
        "<MOT DE PASSE>"
    );
}
catch (Exception $erreur) {
    die("Erreur : " . $erreur->getMessage());
}

/**
 * Si nous arrivons ici c'est que la connexion a été effectuée
 * Pour éviter la page blanche nous affichons un message
 */

echo "Connexion effectuée .... !"
?>