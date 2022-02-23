/** ##################################################### 
 * Condition simples if (SI) / else (Sinon)
 *  #####################################################
*/
// nombreDesieges constante représentant le nombre de siège total 
const nombreDeSieges = 30;
// nombreInvites variable représentant le nombre d'invité déjà assis
let nombreInvites = 21;

// Nous comparons le nombre d'invités déjà entrés avec le nombre de sièges disponibles
if (nombreInvites < nombreDeSieges) {
    // Il reste des places si cette condition est vérifiée
    // Les invités peuvent continuer à entrer 
}else {
    // Sinon il n'y a plus de sièges libre 
    // Les invités ne peuvent plus rentrer 
}

/** ##################################################### 
 * Nous aurions aussi pu chaîner les instructions :
 * if (Si) / else if (Sinon SI) / else (Sinon) comme ceci 
 *  #####################################################
*/
if (nombreInvites == nombreDeSieges) {
    // tous les sièges sont occupés.
} else if (nombreInvites < nombreDeSieges) {
    // Les invités peuvent continuer à entrer
} else {
    // Les invités ne peuvent plus rentrer
}