class Quadrilatere {
    constructor(longueur, largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }
    // méthode pour calculer le périmètre
    calculPerimetre() {
        return (this.longueur + this.largeur) * 2;
    }
    // méthode pour calculer l'aire
    calculAire() {
        return this.longueur * this.largeur;
    }    
}

/**
 * Créeons trois instance de la classe Quadrilatere
 * Ces trois instance seront des objets sur lesquels 
 * nous pourrons appeler les méthodes : 
 * calculPerimètre() et calculAire()
 */

const carre = new Quadrilatere(4, 4);
const rectangle1 = new Quadrilatere(12, 5);
const rectangle2 = new Quadrilatere(8, 2);

console.log("#################################################################");
console.log("#                       Instance carre                          #");
console.log("#################################################################");
console.log(`L'objet carre a un perimetre de ${carre.calculPerimetre()} et une superficie de ${carre.calculAire()}`);
console.log("#################################################################");
console.log("#                       Instance rectangle1                     #");
console.log("#################################################################");
console.log(`L' objet rectangle 1 a un perimetre de : ${rectangle1.calculPerimetre()}`);
console.log("#################################################################");
console.log("#                       Instance rectangle2                     #");
console.log("#################################################################");
console.log(`Notre objet rectangle 2 a une superficie de : ${rectangle2.calculAire()}`);