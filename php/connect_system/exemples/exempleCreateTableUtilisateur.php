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
 * Nous pouvons donc utiliser l'objet $connexion pour créer
 * notre table.
*/

// Preparons la requête a effectuer
// Attention vous obientdrez une erreur si la table existe déjà 
$requeteCreate = "CREATE TABLE utilisateur (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    pass VARCHAR(100),
    email VARCHAR(255) NOT NULL UNIQUE
)";

$requete = $connexion->prepare($requeteCreate);
$requete->execute();

?>