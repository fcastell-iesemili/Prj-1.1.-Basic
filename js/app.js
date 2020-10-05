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

//TODO
// Main function. 
function init() {}

//Add static players
//-----------------------------------------------------------------------------------------------------------

let i;

for (i = 0; i < 8; i ++){

	if (players[i][7] == "BEG"){
		
		const var_name = players[i][1];
		const var_surname = players[i][2];
		const var_email = players[i][4];
		const var_category = players[i][7];
	
		const var_complete_data = var_name + " " + var_surname + " " + var_email + " " + var_category;
	
		let v_beg_slot = document.getElementById("c_beginner_list");
		let new_beg = document.createElement("p");
		new_beg.innerHTML = var_complete_data;
		 
		v_beg_slot.appendChild(new_beg);
	}
	
	else {
		
		const var_name = players[i][1];
		const var_surname = players[i][2];
		const var_email = players[i][4];
		const var_category = players[i][7];
	
		const var_complete_data = var_name + " " + var_surname + " " + var_email + " " + var_category;
	
		let v_pro_slot = document.getElementById("c_professional_list");
		let new_pro = document.createElement("p");
		new_pro.innerHTML = var_complete_data;
		
		v_pro_slot.appendChild(new_pro);
	
	}
}

//-----------------------------------------------------------------------------------------------------------


// This function adds a new player on the list
//-----------------------------------------------------------------------------------------------------------

function Add_New_Player(){
	
	const v_name = document.getElementById("name").value;
	const v_surname = document.getElementById("surname").value;
	const v_email = document.getElementById("email").value;
	const v_category = document.getElementById("category").value;
	const v_complet_data = v_name + " " + v_surname + " " + v_email + " " + v_category;
	
	if (v_category == "BEG"){
		let v_beg_list = document.getElementById("c_beginner_list");
		let neww1 = document.createElement("p");
		neww1.innerHTML = v_complet_data;
		
		v_beg_list.appendChild(neww1);
	}
	
	else {
		let v_beg_list = document.getElementById("c_professional_list");
		let neww2 = document.createElement("p");
		neww2.innerHTML = v_complet_data;
		
		v_beg_list.appendChild(neww2);
	
	}
}
 
buttonAdd.onclick = Add_New_Player;

//-----------------------------------------------------------------------------------------------------------


//TODO
// Checks data from the form fields
//-----------------------------------------------------------------------------------------------------------


function ValidateEmail(v_email) {

	let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

	if (v_email.value.match(mailformat)) {

			alert("You have entered a valid email address!");   
			return true;
	}

	else {

			alert("You have entered an invalid email address!");
			return false;
	}
}

buttonAdd.onclick = ValidateEmail;

//AND ANOTHER OPTION

/*

function validarEmail(v_email) {

	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v_email)){
	 
		alert("La dirección de email " + v_email + " es correcta.");
		return (true)

	} else {
	 
		alert("La dirección de email es incorrecta.");
		return (false)
	}
  }

  */

//-----------------------------------------------------------------------------------------------------------


//TODO
// Create two separate lists depens on category. it uses two different containers
function populateListPlayers() {}

//TODO
// This function returns true whether the player is 16 years old (for beginners) or 18 years old (for professionals)
function isValidAgePlayer(sDate, minAge) {}


