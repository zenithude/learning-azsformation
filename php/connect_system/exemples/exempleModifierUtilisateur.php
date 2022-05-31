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
 * Nous pouvons donc utiliser l'objet $connexion pour modifier un utilisateur
 * Nous utiliserons la commande UPDATE dans notre requête. *
*/

// Imaginons que JohnDoe veuille modifier son mot de passe nous requête sera 
$requeteSql = "UPDATE utilisateur SET pass='NewS3cr3t' WHERE username='JohnDoe'";

// Préparation de la requête 
$updateUtilisateur = $connexion->prepare($requeteSql);

// exécution de la requête
$updateUtilisateur->execute() or die(print_r($updateUtilisateur->errorInfo()));  // on capture l'erreur s'il y en a une 

?>