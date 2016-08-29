// console.log('jelloo');

function showText()
{
		var popup_message = "Email is sent successfully. \n And a copy of the e-mail has been sent to you.";
		alert(popup_message);
}



function validate(form) {
	// alert("checking");
	fail  = validateUserName(form.username.value)
	fail += validateEmail(form.email_address.value)
	fail += validateSubject(form.email_subject.value)
	fail += validateMessage(form.message.value)

	// fail += validateSex(form.sex.value)
	// alert(fail);
	if (fail == "") {
		showText();
		return true;
	}
	else { 
		alert(fail); 
		return false; 
	}
}

function validateUserName(field) {
	if (!field) 
		return "No Name / Organization was entered.\n"
	else
		return ""
}

function validateSubject(field) {
	if (!field) 
		return "No subject was entered.\n"
	else
		return ""
}

function validateEmail(field) {
	if (!field) 
		return "No Email was entered.\n"
	else if (!((field.indexOf(".") > 0) &&
		     (field.indexOf("@") > 0)) ||
	       /[^a-zA-Z0-9.@_-]/.test(field))
		return "The Email address is invalid.\n"
	else
		return ""
}

function validateMessage(field) {
	if (!field) 
		return "No message was entered.\n"
	else
		return ""
}

// function validateSex (field){
// 	console.log("check Sex")
// 	console.log(field)

// 	// if (!field) {
// 	// 	return "Please choose your sex.\n";
// 	// }
// 	// else{
// 	// 	return ""
// 	// }

// 	// var radios = document.getElementById('male');
// 	// var radioValid = false;
// 	// // len = elem.length-1;
// 	// // var chkvalue = '';
// 	// var i = 0;
// 	// while (!radioValid && i < radios.length)
// 	// {
// 	// 	if (radios[i].checked)
// 	// 		radioValid = true;
// 	// 		i++;
// 	// }
// 	// if (!radioValid)
// 	// {
// 	// 	return('Did not select gender.');
// 	// }
// 	// else{
// 	// 	return ""
// 	// }
// }




