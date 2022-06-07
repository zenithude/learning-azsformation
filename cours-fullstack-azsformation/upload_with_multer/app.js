const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();
const host = "localhost";
const port = 3000;

// Paramétrage moteur de template Pug
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "pug");

// Pour le stockage en local initialisons une variable storage
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file,cb) => {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});

const maxSize = 1 * 1000 * 1000;

// pour l'upload nous initialisons une variable upload
let upload = multer({
    storage: storage,
    limits: {fileSize: maxSize},
    fileFilter: (req, file,cb) => {
        let filetypes = /jpeg|jpg|png/;
        let mimetype = filetypes.test(file.mimetype);
        let extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb(`Une erreur est survenue seuls les fichiers ${filetypes} sont autorisés`);
    }
}).single("picture");

// une route get pour l'accueil
app.get("/", (req, res) => {
    // rendu sur la vue 
    res.render("uploadFileForm");
});

app.post("/uploadFile", (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Image uploadée avec succès !");
        }
    })
});

app.listen(port, host, () => {
    console.log(`Le serveur a démarré à l'adresse http://${host}:${port}`);
});
