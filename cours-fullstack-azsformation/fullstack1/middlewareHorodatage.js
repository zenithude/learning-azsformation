const express = require("express");
const app = express();
const port = 3000; 
const host = "localhost"
let nombreRequete = 0

/**
 * Nous allons créer une fonction qui imprime un message dans la console à chaque fois qu'une requête est envoyée
 * Nous l'affecterons à une variable imprimeMessage 
**/
let imprimeMessage = (req, res, next) => {
    nombreRequete++;
    req.imprimeMessage = `Requête n°: ${nombreRequete}... `;
    next();
};

/**
 * Ajoutons notre middleqare pour l'horodatage
**/
let horodatage = (req, res, next) => {
    const dateActuelle = new Date();
    let dateTexte = `${dateActuelle.toLocaleTimeString('fr-FR')} ...`;
    req.horodatage = dateTexte;
    next() 
};

/**
 * Pour charger les fonctions nous utilisons app.use()
 * En lui passant en argument notre fonction. 
 * Et nous le faisons avant la route get vers le PATH : "/"
**/
app.use(imprimeMessage);
app.use(horodatage);

/**
 * Puis nous écrivons notre route
**/
app.get("/", (req, res) => {
    let reponseTexte = "Vous avez envoyé une requête ?";    
    res.send(`${reponseTexte}`);
    console.log(req.imprimeMessage);
    console.log(req.horodatage);
    console.log('=====================================')
})

app.listen(port, () => {
    console.log(`Le serveur a bien démarré sur le port http://${host}:${port}/`);
})

/**
 * Il ne nous reste plus qu'à tester ceci en ouvrant notre navigateur 
 * A chaque fois que vous actualiserez la page un message s'affichera dans la console. 
 * Testons donc .... 
**/