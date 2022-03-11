/** Quand on va exécuter ce fichier notre code va être lu dans l'ordre d'écriture
 * setTimeout() va se lancer et rendre la main, et affichera le message n°1, 5 secondes plus tard. 
 * Le message n°2 quand à lui s'affichera dans la console immédiatement après que setTimeout() ait
 * été lancée. 
 */

console.log('###############################')
setTimeout(() => {
    console.log("Je suis le message n°1 !!!")
    console.log('###############################')
}, 5000);

console.log("Je suis le message n°2 !!!");
console.log('###############################')