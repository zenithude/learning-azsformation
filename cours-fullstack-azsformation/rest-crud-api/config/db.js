const mysql = require('mysql');
const connexion = mysql.createConnection({
    host: "<Nom d'hôte>",
    user: "<Votre nom d'utilisateur>",
    password: "<Votre mot de passe>",
    database: "<Nom de la base de données>"
});

connexion.connect((error) => {
    if (!!error) {
        console.log(error);
    } else {
        console.log("La connexion a réussi .... !")
    }
});

module.exports = connexion;