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

//Add static players
let i;
for (i = 0; i < 8; i ++){
	if (players[i][7] == "BEG"){

		document.getElementById("c_beginner_list").innerHTML  = players[i][1];
		document.getElementById("c_beginner_list").innerHTML  = players[i][2];
		document.getElementById("c_beginner_list").innerHTML  = players[i][4];
		document.getElementById("c_beginner_list").innerHTML  = players[i][7];
	}
	else {

		document.getElementById("c_beginner_list").innerHTML  = players[i][1];
		document.getElementById("c_beginner_list").innerHTML  = players[i][2];
		document.getElementById("c_beginner_list").innerHTML  = players[i][4];
		document.getElementById("c_beginner_list").innerHTML  = players[i][7];
	}
}

// Containers and global objects 
const containerPlayersBeg = document.getElementById('c_beginner_list');
const containerPlayersPro = document.getElementById('c_professional_list');
const buttonAdd = document.getElementById('btn-enviar');



//TODO
// Main function. 
function init() {}

//function to save credentials that user have been introduced

//TODO
// This function adds a new player on the list
/******************************************************************************/

function Add_New_Player(){
		 
	const v_name = document.getElementById("name").value;
	const v_surname = document.getElementById("surname").value;
	const v_email = document.getElementById("email").value;
	const v_category = document.getElementById("category").value;

	const v_complet_data = v_name + " " + v_surname + " " + v_email + " " + v_category;

	let v_beg_list = document.getElementById("c_beginner_list");
	let neww = document.createElement("p");
	neww.innerHTML = v_complet_data;
	
	v_beg_list.appendChild(neww);
 } 	

buttonAdd.onclick = Add_New_Player;

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


