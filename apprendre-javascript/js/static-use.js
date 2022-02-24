/**
 * illustration avec l'objet Math
 */

// génerer un nombre aléatoire entre 0 et 1
const nombreAleatoire = Math.random();

// arrondir à l'entier supérieur
const arrondiSuperieur = Math.ceil(12.2);

// arrondir à l'entier inférieur
const arrondiInferieur = Math.floor(12.2);

// affichons nos résultats
console.log(`Le nombre tiré au sort entre 0 et 1 est : ${nombreAleatoire}`);
console.log(`L'entier supérieur à 12.2 est : ${arrondiSuperieur}`);
console.log(`L'entier inférieur à 12.2 est : ${arrondiInferieur}`);