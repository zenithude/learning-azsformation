const express = require("express");
const app = express();
const port = 3000; 
const host = "localhost"

/**
 * Pour utiliser pug nous avons juste besoin de le paramétrer avec :
 * app.set() 
**/

app.set("view engine", "pug");
app.set("views", "./views");

/**
 * Pour que notre vue s'affiche ajoutons une route app.get
**/

app.get("/premierTemplate", (req, res) => {
    res.render("premierTemplate");
});

app.listen(port, () => {
    console.log(`Le serveur a bien démarré sur le port http://${host}:${port}/`);
})
