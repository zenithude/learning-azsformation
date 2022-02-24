/**
 * Nous allons définir une fonction calculCarre(nombre)
 * Qui retournera le carré d'un nombre passé en argument
 */

function calculCarre(nombre) {
    return nombre * nombre
}

/**
 * Utilisons cette fonction dans une boucle 
 * Notre boucle utilisera une variable nombre initialisée à 1
 * A chaque passage nous appelerons la fonction calculeCarre(nombre)
 * Puis nous afficherons un message dans la console
 * Nous incrémenterons la variable nombre jusqu'à ce qu'elle soit égale à 10
 */

// Nous déclarons une variable nombreCarre qui nous permettra 
// de récupérer la valeur retournée par la fonction
let nombrAuCarre;
for (let nombre = 1; nombre <= 10; nombre++) {
    // Nous affectons la valeur de retour de notre fonction à nombreAuCarre
    nombreAuCarre = calculCarre(nombre);
    console.log(`Le carré de ${nombre} est ${nombreAuCarre}`);
}
