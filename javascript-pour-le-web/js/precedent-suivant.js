const elementMain = document.getElementById("main");

for (let i = 0; i < elementMain.children.length; i++) {
    document.write(`Le contenu de l'enfant n°${i} de main est : <strong>${elementMain.children[i].textContent}</strong> <br>`);
    document.write("<hr>");
}




