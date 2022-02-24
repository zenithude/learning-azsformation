/**
 * Créons une fonction permettant de faire une pause 
 * pour simuler un compte à rebours seconde par seconde
 */
function sleep(millisecondes) {
    let secondeEnCours = new Date().getTime();
    while (secondeEnCours + millisecondes >= new Date().getTime()) {
        /**
         * Ici nous n'exécutons aucun code
         * La boucle s'arrêtera toute seule
         * quand 1000 millisecondes soit 1s 
         * sera écoulé.
         */
    }
}


function CompteARebours(nombreDepart) {
    let nombreSuivant = nombreDepart - 1;
    if (nombreDepart > 0) {
        console.log(`Encore ${nombreDepart} seconde(s) avant la fin du décompte`)
        sleep(1000); // appel de notre fonction 
        CompteARebours(nombreSuivant)
    } else {
        console.log('#### BOOM !!! ###')
    }
}

CompteARebours(15);