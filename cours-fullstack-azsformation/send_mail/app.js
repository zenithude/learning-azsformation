const nodemailer = require("nodemailer");

// Ici nous collons le code que nous récupérons sur mailtrap 
// Remplacez user et pass par vos informations. 
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "<username>",
      pass: "<********>"
    }
});

// Décrivons les options et textes de notre email
let optionsMail = {
    from: "sendmail@sendmail.com",
    to: "azsformation@dsm-it.fr",
    subject: "Un test d'envoi de mail avec pièce jointe avec nodemailer",
    html: "<p>Ceci est un mail de test ... <br> Avec un logo en PJ.</p>",
    attachments: {
        filename: "logo.jpg",
        path: "./uploads/logo.jpg"
    }
};

transport.sendMail(optionsMail, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Le mail a bien été envoyé ${info.response}`);
    }

});
