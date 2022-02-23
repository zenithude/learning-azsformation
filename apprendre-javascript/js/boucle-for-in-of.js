/**
 * Nous allons créer 2 tableaux :
 * - un premier contiendra des couleurs sous forme de string
 * - un deuxieme contiendra des objets personnes contenant :
 *   des clés nom et prenom pour chaque personne.
 * 
 * Puis nous écrirons les 2 types de boucles : 
 * 
 * - for...in : en utilisant les indices
 * - for...of : en utilisant les éléments directement
 */

let couleurs = ["rouge", "bleu", "jaune", "magenta", "noir", "blanc"];
let personnes = [
    {nom: "Doe", prenom: "John"},
    {nom: "Kent", prenom: "Clark"},
    {nom: "Parker", prenom: "Peter"},
    {nom: "Morgan", prenom: "Dexter"}
]
// on insère une ligne pour séparer l'affichage des différentes boucle à l'exécution
console.log("#################################################################");
console.log("#                Boucle for...in sur couleurs                   #");
console.log("#################################################################");
// Boucle for...in pour parcourir le tableau couleur
for (let i in couleurs){
    // i démarre automatiquement à 0 qui est le 1er indice du tableau
    // N'oubliez pas un tableau commence toujours à l'indice zéro 
    console.log(`La couleur n°${i} de notre tableau est ${couleurs[i]}.`);
}
console.log("#################################################################");
console.log("#                Boucle for...of sur couleurs                   #");
console.log("#################################################################");
// Boucle for...of sur le tableau couleur
for (couleur of couleurs) {
    // Remarquez couleur au singulier qui est l'élément en cours d'utilisation
    // Dans le tableau couleurs au pluriel qui contient nos éléments. 
    console.log(`La couleur n°${couleurs.indexOf(couleur)} est : ${couleur}`);
}
console.log("#################################################################");
console.log("#                Boucle for...of sur personnes                  #");
console.log("#################################################################");
// Boucle for...of sur le tableau personne
for (personne of personnes) {
    console.log(`Bonjour je m'appelle : ${personne.prenom} ${personne.nom}`);
}