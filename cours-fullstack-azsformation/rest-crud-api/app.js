const createError = require("http-errors");
const express = require("express");
const flash = require("express-flash");
const session = require("express-session");
const mysql = require("mysql");
const connexion = require("./config/db");
const utilisateursRoute = require("./routes/utilisateurs");
const port = 3000;
const host = "localhost";
const app = express();

// configuration moteur de template
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    cookie: {maxAge: 60000},
    store: new session.MemoryStore,
    saveUninitialized: true,
    resave: "true",
    secret: "secret"
}))

app.use(flash());
app.use("/", utilisateursRoute);

app.use((req, res, next) => {
    next(createError(404));
});

app.listen(port, host, () => {
    console.log(`Le serveur a démarré à l'adresse http://${host}:${port}`);
})
