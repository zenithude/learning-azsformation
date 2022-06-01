const express = require("express");
const app = express();
const port = 3000; 
const host = "localhost"

app.get("/:id", (req,res) => {
    res.send(`Vous avez demandé l'id : ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Le serveur a bien démarré sur le port http://${host}:${port}/`);
})
