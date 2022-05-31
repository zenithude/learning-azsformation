<?php
/**
 * Pour que ce fichier fonctionne sur votre machine remplacez 
 * <DB_NAME>, <IDENTIFIANT> et <MOT DE PASSE> 
 * Par vos informations de connexion à votre serveur de BDD 
**/

try {
    $connexion = new PDO(
        "mysql:host=localhost;dbname=connect_system;charset=utf8", 
        "root",
        "Volisoda@2021"
    );
}
catch (Exception $erreur) {
    die("Erreur : " . $erreur->getMessage());
}

echo "connexion ok ... !!!";

/**
 * Si nous arrivons ici c'est que la connexion a été effectuée
 * Nous pouvons donc utiliser l'objet $connexion pour supprimer un utilisateur
 * Nous utiliserons la commande DELETE dans notre requête. *
*/

// Imaginons que JohnDoe veuille modifier son mot de passe nous requête sera 
$requeteSql = "DELETE FROM utilisateur WHERE username='JohnDoe'";

// Préparation de la requête 
$deleteUtilisateur = $connexion->prepare($requeteSql);

// exécution de la requête
$deleteUtilisateur->execute() or die(print_r($deleteUtilisateur->errorInfo()));  // on capture l'erreur s'il y en a une 

?>