const bonjour = document.getElementById("bonjour");
const validation = document.getElementById("validation")
bonjour.addEventListener('input', (e) => {
	let value = e.target.value;
	if (value.startsWith('Bonjour')) {
		isValid = true;
	}else {
		isValid = false;
	}
	
	if (isValid) {
		validation.textContent = "Bravo, et bonjour en retour";
	}else {
		validation.textContent = "Vous devez écrire Bonjour dans le champs !!!";
	}
});