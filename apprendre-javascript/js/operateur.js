/** Créons 2 variables sur lesquelles faire des opérations */

let premierNombre = 50;
let deuxiemeNombre = 10;
let addition = premierNombre + deuxiemeNombre;
let soustraction = premierNombre - deuxiemeNombre;
let multiplication = premierNombre * deuxiemeNombre;
let division = premierNombre / deuxiemeNombre;

/**Ne touchez pas ce qui suit... */ 
document.getElementById("addition").innerText = (`${premierNombre} + ${deuxiemeNombre} = ${addition}`);
document.getElementById("soustraction").innerText = (`${premierNombre} - ${deuxiemeNombre} = ${soustraction}`);
document.getElementById("multiplication").innerText = (`${premierNombre} * ${deuxiemeNombre} = ${multiplication}`);
document.getElementById("division").innerText = (`${premierNombre} / ${deuxiemeNombre} = ${division}`);


