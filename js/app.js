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


//Add static players
//-----------------------------------------------------------------------------------------------------------

let i; //CONTADOR

for (i = 0; i < players.length; i ++){

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


	//HERE WE VERIFICATING THE AGE OF THE CLIENT	
	//---------------

	let v_age_client = document.getElementById("date").value;
	let Date_Client = new Date(v_age_client);
	let Year_Client = Date_Client.getFullYear();

	if (Year_Client > 2004) {

		alert ("No tienes la suficiente Edad 'Minima edad 16' ")

		return callback(false);

	}

	if (Year_Client > 2002) {

		let v_beginner_list = document.getElementById("c_beginner_list");
		let neww_begginer = document.createElement("p");
		neww_begginer.innerHTML = v_complet_data;
		
		v_beginner_list.appendChild(neww_begginer);

	}

//---------------

	else if (v_category == "BEG"){
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

//-----------------------------------------------------------------------------------------------------------


// Checks data from the form fields
//-----------------------------------------------------------------------------------------------------------


//VALIDATE DNI
//-----------------------------------------------------------------------------------------------------------

function ValidateDNI() {
	
	
	let v_dni_client = document.getElementById("dni").value;

	let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

	if( !(/^\d{8}[A-Z]$/.test(v_dni_client)) ) {
	 
		alert ("Revisalo de nuevo el DNI")

		return callback(false);
	}

	if(v_dni_client.charAt(8) != letras[(v_dni_client.substring(0, 8))%23]) {
  
		alert ("Revisalo de nuevo el DNI")

		return callback(false);
	}
	
	else {

		return true;
	}
}

//-----------------------------------------------------------------------------------------------------------


//VALIDATE NAME
//-----------------------------------------------------------------------------------------------------------

function Validate_Name (){
	
	let v_name_client = document.getElementById("name").value;

	if (v_name_client.length == 0) {

		alert ("No has escrito nada en el usuario")

		document.getElementById("name").focus();

		return callback(false);

	}
	else {
		return true;
	}
}

//-----------------------------------------------------------------------------------------------------------


//VALIDATE SURNAME
//-----------------------------------------------------------------------------------------------------------

function Validate_Surname (){
	
	let v_surname_client = document.getElementById("surname").value;

	if (v_surname_client.length == 0) {

		alert ("No has escrito nada en el apellido")

		document.getElementById("surname").focus();

		return callback(false);
	}
	else {
		return true;
	}
}

//-----------------------------------------------------------------------------------------------------------


//VALIDATE BIRTH DATA
//-----------------------------------------------------------------------------------------------------------

function ValidateDate() {

	let v_date_client = document.getElementById("date").value;


  	if( !(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(v_date_client)) ) {

		alert ("La fecha de nacimiento introducida no es correcta")

		document.getElementById("date").focus();
	
		return callback(false);
 	 }	

  	else {

	  return true;
  	}

}

//-----------------------------------------------------------------------------------------------------------


//Validate Phone
//-----------------------------------------------------------------------------------------------------------

function ValidatePhone() {

	let v_phone_client = document.getElementById("phone").value;
	
	if( !(/^\d{9}$/.test(v_phone_client)) ) {
		  
		alert ("No has introducido un numero de teléfono válido")

		document.getElementById("phone").focus();
	
		return callback(false);
	}
	
	else{
			
		return true;
	}
	  
}

//-----------------------------------------------------------------------------------------------------------


// VALIDATE EMAIL
//-----------------------------------------------------------------------------------------------------------

function Validate_Email() {
	
	let v_email_client = document.getElementById("email").value;
	
	if( !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v_email_client)) ) {
  
		alert ("No has introducido un correo válido")

		document.getElementById("email").focus();

		return callback(false);
	}
		
	
	else{

		return true;
	}
	
}

//-----------------------------------------------------------------------------------------------------------


//VALIDATE "COMPTE CORRENT"
//-----------------------------------------------------------------------------------------------------------

function Validate_Account (){
	
	let v_account_client = document.getElementById("account").value;

	if (v_account_client.length == 0) {

		alert ("No has escrito nada en el campo 'compte corrent' ")

		document.getElementById("account").focus();

		return callback(false);

	}
	else {
		return true;
	}
}

//-----------------------------------------------------------------------------------------------------------


//FUNCTION THAT DO ALL
//-----------------------------------------------------------------------------------------------------------

function Validation(){
	
	ValidateDNI(); Validate_Name(); Validate_Surname(); ValidateDate();ValidatePhone(); Validate_Email(); Validate_Account(); Add_New_Player();
}

//-----------------------------------------------------------------------------------------------------------