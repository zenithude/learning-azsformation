var fs = require('fs')

/**Prenons un exemple simple:
 * Si on essaye de lire un fichier avec le module fs nous écrirons
 */

fs.readFile("../fichier-textes/gestion-erreur-callback.txt", (erreur, donnees) => {
    // on teste si le paramètre erreur contien quelque chose. 
    if(erreur) {
        return console.error(erreur);
    }
    // S'il n'y a pas eu d'erreur nous pouvons utiliser les données du fichier texte. 
    console.log(donnees.toString());
})

/** executer ce fichier dans le répertoire qui le contient
 * sinon il ne trouvera pas le fichier texte avec le chemin relatif.
 */