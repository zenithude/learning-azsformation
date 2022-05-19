<!doctype html>
<html lang="fr">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Envoi de paramètres dans l'url</title>
  </head>
  <body>
    <h2 class="text-center">Formulaire qui envoit des paramètres</h2>
    <!-- Commençons par intégrer le formulaire avec l'utilisation de bootstrap pour le rendre plus joli --> 
    <form action="bienvenu.php" method="GET">
        <div class="row">
            <div class="col text-center ">
                <label for="nom">Votre Nom</label>
                <input type="text" class="form-control" placehoder="Votre nom" name="nom">
            </div>
            <div class="col text-center">
                <label for="prenom">Votre Prenom</label>
                <input type="text" class="form-control" placehoder="Votre prénom" name="prenom">
            </div>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary my-2">Envoyer</button>
        </div>
        
    </form>

    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    
  </body>
  
</html>