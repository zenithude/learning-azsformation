<?php 
/**
 * Avant d'écrire notre doctype nous vérifions les données reçues
 * Nous allons créer une fonction que l'on pourra appeler pour vérifier chaque donnée
 * Définition des variables que nous allons recevoir et assignation à une chaine ""
 */
$nom =  $prenom = $message = "";

function testDonneeRecue($data) {
    $data = trim($data); // supprime les caractères inutiles
    $data = stripslashes($data); // supprime les barres obliques
    $data = htmlspecialchars($data); // convertit les caractères spéciaux en entités HTML
    return $data;
}

// assignation des valeurs reçues aux variables après passage dans la fonction testDonneeReçues
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = testDonneeRecue($_POST["nom"]);
    $prenom = testDonneeRecue($_POST["prenom"]);
    $message = testDonneeRecue($_POST["message"]);
}

// Maintenant nous sommes parés pour afficher les données.
?>
<!doctype html>
<html lang="fr">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Style perso -->
    <link rel="stylesheet" href="./css/style.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Message de bienvenue</title>
  </head>
  <body>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">Bienvenu à vous.</h3>
            <p class="card-text">
                Bonjour <?php echo $prenom . " " . $nom; ?>
            </p>
            <p class="card-text">
                Message transmis : <?php echo $message; ?>
            </p>
        </div>
    </div>
  </body>
<html>

