const express = require("express");
const app = express();
const port = 3000; 
const host = "localhost"
/**
 * Une première route serait la page d'accueil : 
 * http://localhost:3000/
 * le PATH est donc "/"  
 * et la réponse est : Bonjour je suis la page d'accueil
**/
app.get("/", (req, res) => {
    res.send("Bonjour, je suis la page d'accueil");
})

/**
 * Une deuxième route serait la page about : 
 * http://localhost:3000/
 * le PATH est donc "/about"
**/
app.get("/about", (req, res) => {
    res.send(`Ceci est une page de démonstration qui parlera plus tard de nous...`);
})

/**
 * Une dernière route serait la page d'accueil avec la méthode post : 
 * http://localhost:3000/
 * le PATH est donc "/"  
 * et la réponse est : Je suis une requête POST
**/
app.post("/", (req, res) => {
    res.send("Je suis une requête POST");
})



app.listen(port, () => {
    console.log(`Le serveur a bien démarré sur le port http://${host}:${port}/`);
})