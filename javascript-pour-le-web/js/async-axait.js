/** 
 * Dans cet exemple, nous avons un total de 3 fonction asynchrones : 
 * maFonctionAsynchrone1 , maFonctionAsynchrone2 , maFonctionAsynchrone3.
 * Quand on utilise async et await : 
 * une fonction asynchrone doit avoir le mot clé async avant la fonction. 
 * Ensuite, dans le code, nous pouvons faire appel à des fonctions asynchrones 
 * et attendre leur résultat grâce au mot clé await que l'on met devant l'appel 
 * de la fonction.
 */

async function maFonctionAsynchrone1() {
    /**Ici du code asynchrone */
}

async function maFonctionAsynchrone2() {
    /**Ici du code asynchrone */
}

async function maFonctionAsynchrone3() {
    const valeur1 = await maFonctionAsynchrone1();
    const valeur2 = await maFonctionAsynchrone2();
    return valeur1 + valeur2
}

