const mysql = require("mysql");

/**
 * Dans la const connexion remplacez les valeurs host, user, et password
 * par vos identifiants
**/

const connexion = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Volisoda@2021"
});

// on se connecte
connexion.connect();

/**
 * Pour tester la connexion nous allons demander à mysql 
 * de faire une opération simple 
**/

connexion.query("SELECT 1 + 1 AS resultat", (err, rows, fields) => {
    if (err) throw err;
    console.log(`1 + 1 = ${rows[0].resultat} ...`)
});

// on ferme la connexion
connexion.end();


