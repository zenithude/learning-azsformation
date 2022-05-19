<!doctype html>
<html lang="fr">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Message de bienvenue</title>
  </head>
  <body>
  <?php 
    if ($_GET['nom'] == "") {?>
      <p class="text-center">Il faut remplir un nom avant de soumettre le formulaire<br>Vous pouvez recommencer en cliquant sur le bouton ci-dessous<br>
      <button class="btn btn-danger"><a href="index.php">Retournez à l'accueil</a></button></p>
      <?php
      // avec le return ci-dessous on bloque l'exécution de php
      return;
    }elseif ($_GET['prenom'] == ""){?>
      <p class="text-center">Il faut remplir un prénom avant de soumettre le formulaire<br>Vous pouvez recommencer en cliquant sur le bouton ci-dessous<br>
      <button class="btn btn-danger"><a href="index.php">Retournez à l'accueil</a></button></p>
      <?php
      // avec le return ci-dessous on bloque l'exécution de php
      return;
    }else {?>

    <div class="card">
        <div class="card-body">
            <h3 class="card-title">Bienvenu à vous.</h3>
            <p class="card-text">
                Bonjour <?php echo $_GET['prenom'] . " " . $_GET['nom']; ?>
            </p>
            <p class="card-text">
                Vous êtes bien arrivé, dans votre espace !
            </p>
        </div>
    </div>
    <?php
    }    
    ?>



    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    
  </body>
  
</html>