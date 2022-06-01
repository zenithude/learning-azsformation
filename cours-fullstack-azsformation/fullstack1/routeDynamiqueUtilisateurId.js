const express = require("express");
const app = express();
const port = 3000; 
const host = "localhost"

app.get("/utilisateurs/:username/:id", (req,res) => {
    res.send(`Bonjour ${req.params.username}, votre id utilisateur est : ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Le serveur a bien démarré sur le port http://${host}:${port}/`);
})
