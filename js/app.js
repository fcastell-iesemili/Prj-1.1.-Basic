// Information about players. Array with example data 
let players = [
	["43127678F", "Juan", "Pérez Gómez", "692403829", "jperez@gmail.com", "12/12/1980", "ES6621000418401234567891", "PRO"],
	["43125043G", "Adolfo", "Gutiérrez Lorma", "692403829", "agutierrez@gmail.com", "12/12/1985", "ES6000491500051234567892", "PRO"],
	["43125430I", "Carles", "Vich Sacelo", "692403829", "cvich@gmail.com", "12/12/1981", "ES9420805801101234567891", "PRO"],
	["43124345J", "Gustavo", "Cander More", "692403829", "gmore@gmail.com", "12/12/1995", "ES9000246912501234567891", "PRO"],
	["43127678F", "Alicia", "Pérez Gómez", "692403829", "jperez@gmail.com", "12/12/1980", "ES6621000418401234567891", "BEG"],
	["43125043G", "David", "Gutiérrez Lorma", "692403829", "agutierrez@gmail.com", "12/12/1985", "ES6000491500051234567892", "BEG"],
	["43125430I", "Patricia", "Vich Lorem", "692403829", "cvich@gmail.com", "12/12/1981", "ES9420805801101234567891", "BEG"],
	["43124345J", "Pepa", "Vivancos Leia", "692403829", "pleia@gmail.com", "12/12/1995", "ES9000246912501234567891", "BEG"]
];

// Containers and global objects 
const containerPlayersBeg = document.getElementById('c_beginner_list');
const containerPlayersPro = document.getElementById('c_professional_list');
const buttonAdd = document.getElementById('btn-enviar');

//function to save credentials that user have been introduced
function getData (){
	const name = document.getElementById("name").value;
	const surname = document.getElementById("surname").value;
	const email = document.getElementById("email").value;
	const category = document.getElementById("category").value;
}

//TODO
// Main function. 
function init() {}

//TODO
// This function adds a new player on the list
/******************************************************************************/
function addPlayer() {

}

//TODO
// Checks data from the form fields
function validateForm(){

	function validateDNI(dni) {
		const regex = /^\d{8}[a-zA-Z]$/;
	
		if (regex.test(dni)) {
			var numero = dni.substr(0, dni.length - 1);
			var letr = dni.substr(dni.length - 1, 1);
			numero = numero % 23;
			letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
			letra = letra.substring(numero, numero + 1);
			if (letra != letr.toUpperCase()) return false;
		} else {
			return false;
		}
	
		return true;
	}

	if(nom.length == 0) {
		alert('No has escrito nada en el nombre');
		return false;
	  }

	 if(llinatges.length == 0) {
		alert('No has escrito nada en el apellido');
		return false;
	  }

	function validateDate(date, format = "dd/mm/aaaa") {
		let regex = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
			if (format == "dd-mm-aaaa")
				regex = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
			return regex.test(date);
	}

	function validatePhone(telefono) {
		const regex = /^[0-9]{2,3}-? ?[0-9]{6,7}$/;
			return regex.test(telefono);
	}
	
	function validateEmail(email) {
		const regex = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
		return regex.test(email);
	}

}

//TODO
// Create two separate lists depens on category. it uses two different containers
function populateListPlayers() {}

//TODO
// This function returns true whether the player is 16 years old (for beginners) or 18 years old (for professionals)
function isValidAgePlayer(sDate, minAge) {}


