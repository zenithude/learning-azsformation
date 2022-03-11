const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const description = document.getElementById("description");

nom.addEventListener('change', (event) => {
    document.getElementById("affiche_nom").innerText = event.target.value;
});

prenom.addEventListener('change', (event) => {
    document.getElementById("affiche_prenom").innerText = event.target.value;
});

description.addEventListener('change', (event) => {
    document.getElementById("affiche_description").innerHTML = event.target.value;
});