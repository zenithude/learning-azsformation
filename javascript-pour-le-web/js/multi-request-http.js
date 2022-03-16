var GETRequeteCount = 0;
/**
 * La variable ci dessous sert à stocker les réponses des requêtes GET
 * Puisqu'elle ne vont pas arriver en même temps.
 */
var GETResultatRequete = []; 

function onGETRequeteFinie(erreur, resultat){
    if (erreur) throw erreur;

    GETRequeteCount++;
    GETResultatRequete.push(resultat);

    if (GETRequeteCount == 2) {
        post(url3, (erreur, resultat) => {
            if (erreur) throw erreur;

            // ici nous avons accompli nos requêtes
        });
    }
}

get(url1, onGETRequeteFinie);
get(url2, onGETRequeteFinie);