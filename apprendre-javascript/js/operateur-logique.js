/**
 * Créons 3 variables de type boolean
 */

let utilisateurConnecte = true;
let utilisateurForum = true;
let utilisateurAdmistrateur = false;

// Exemples avec ET logique
utilisateurConnecte && utilisateurForum; // true
utilisateurConnecte && utilisateurAdmistrateur; // false

// Exemple avec OU logique
utilisateurConnecte || utilisateurForum; // true
utilisateurConnecte || utilisateurAdmistrateur; // true

// Exemple avec NON logique
!utilisateurConnecte; // false
!utilisateurAdmistrateur; // true
