const express = require("express");
const router = express.Router();
const dbConnect = require("../config/db");

// Pour la page utilisateurs
router.get("/", (req, res, next) => {
    dbConnect.query('SELECT * FROM utilisateurs ORDER BY id asc', (err, colonnes) => {
        if(err) {
            req.flash("error", err);
            // rendu sur la vue views/index.pug
            res.render("index", {data:""});
        } else {
            // rendu sur la vue views/index.pug
            res.render("index", {data:colonnes});
        }
    });
});

// Route pour l'ajout (add)
router.get("/add", (req, res, next) => {
    // Rendu sur la vue add.pug
    res.render("add", {
        username: "",
        email: ""
    })
}) 

// Ajout d'un nouvel utilisateur
router.post("/add", (req, res, next) => {
    let username = req.body.username;
    let email = req.body.email;
    let errors = false;

    if (username.length === 0 || email.length === 0) {
        errors = true;

        // flash message
        req.flash("error", "Veuillez entrer un nom et un email");
        // rendu sur la vue add.pug avec le message flash
        res.render("add", {
            username: username,
            email: email
        })
    }

    if (!errors) {
        // Si pas d'erreurs
        let formData = {
            username: username,
            email: email
        }

        // insertion du nouvel utilisateur dans la table
        dbConnect.query("INSERT INTO utilisateurs (username, email) VALUES (?, ?)", [formData.username, formData.email], (err, result) => {
            if(err) {
                req.flash("error", err)

                // rendu sur la vue add.pug
                res.render(("add", {
                    username: formData.username,
                    email: formData.email
                }))
            } else {
                req.flash("success", "Utilisateur ajouté !");
                res.redirect("/");
            }
        })
    }
})

// Editer un utilisateur
router.get("/edit/:id", (req, res, next) => {
    let id = req.params.id;

    dbConnect.query("SELECt * FROM utilisateurs WHERE id = " + id, (err, colonnes, champs) => {
        if (err) throw err;

        // si l'utilisateur n'est pas trouvé
        if (colonnes.length <= 0) {
            req.flash("error", `L'utilisateur avec l'id ${id} n'existe pas ...`);
            res.redirect("/");
        } else {
            // rendu sur edit.pug
            res.render("edit", {
                title: "Modifier l'utilisateur",
                id: colonnes[0].id,
                username: colonnes[0].username,
                email: colonnes[0].email
            })
        }
    })
})

// Mettre à jour les données de l'utilisateur
router.post("/update/:id", (req, res, next) => {
    let id = req.params.id;
    let username = req.body.username;
    let email = req.body.email;
    let errors = false;

    if (username.length === 0 || email.length === 0) {
        errors = true;
        req.flash("error", "Veuillez entrer un nom et un email");
        // rendu sur add.pug avec le message flash
        res.render("edit", {
            id: req.params.id,
            username: username,
            email: email
        })
    }

    // si pas d'erreurs 
    if (!errors) {
        let formData = {
            username: username,
            email: email
        }

        // requete de mise à jour des données
        dbConnect.query("UPDATE utilisateurs SET ? WHERE id = " + id, formData, (err, result) => {
            if (err) {
                req.flash("error", err);
                // rendu sur la vue edit.pug
                res.render("edit", {
                    id: req.params.id,
                    username: formData.username,
                    email: formData.email
                })
            } else {
                req.flash("success", "L'utilisateur a bien été mis à jour");
                res.redirect("/");
            }
        })
    }
})

// Supprimer un utilisateur
router.get("/delete/:id", (req, res, next) => {
    let id = req.params.id;
    dbConnect.query("DELETE FROM utilisateurs WHERE id = " + id, (err, result) => {
        if (err) {
            req.flash("error", err)
            res.redirect("/");
        } else {
            req.flash("success", `L'utilisateur avec l'id : ${id} a bien été supprimé`);
            res.redirect("/");
        }
    })
})

module.exports = router;
