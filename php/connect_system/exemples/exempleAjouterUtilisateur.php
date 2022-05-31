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

echo "connexion ok ... !!!";

/**
 * Si nous arrivons ici c'est que la connexion a été effectuée
 * Nous pouvons donc utiliser l'objet $connexion pour ajouter une utilisateur
 * Nous utiliserons la commande INSERT INTO dans notre requête. *
*/

// écriture de la requête, on ne précise pas l'ID puisqu'il est en AUTO_INCREMENT
$requeteSql = "INSERT INTO utilisateur (username, pass, email) VALUES (:username, :pass, :email)";

// Préparation de la requête 
$insertUtilisateur = $connexion->prepare($requeteSql);

// exécution de la requête
$insertUtilisateur->execute([
    "username" => "JohnDoe",
    "pass" => "S3cr3t",
    "email" => "john.doe@gmail.com",
]) or die(print_r($insertUtilisateur->errorInfo()));  // on capture l'erreur s'il y en a une 

?>