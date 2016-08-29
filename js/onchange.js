/*
STEPS
1. find element by id using jquery
2. set event listener (on change)
3. validate selected elt
4. if fail, append message notice

This js file is developed by Niro Haryamen Mohd Rais with the help of Hasbullah Razali

*/

$(document).ready(function() {
	checkUserName('#username');
	checkEmail('#email_address');
	checkSubject('#email_subject');
	checkMessage('#message');
});

function checkUserName(NameID){
	$(NameID).on('change', function(){
		var UserNameSelector = $(this);
		var errorSelector = UserNameSelector.siblings('.error');

		if (UserNameSelector.val() == ""){
			errorSelector.text("").text("You did NOT enter your name/organization.");
		}
		else{
			errorSelector.text("");
		}
	});
}

function checkEmail(EmailID){
	$(EmailID).on('change', function(){
		var emailSelector = $(this);
		var errorSelector = emailSelector.siblings('.error');
		// console.log(emailSelector);
		if (emailSelector.val() == ""){
			errorSelector.text("").text("No email was entered");
		}
		else if((emailSelector.val().indexOf(".") == -1) ||
			(emailSelector.val().indexOf("@") == -1) ||
			/[^a-zA-Z0-9.@_-]/.test(emailSelector.val())){
			errorSelector.text("").text("Invalid email address.");
		}
		else{
			errorSelector.text("");
		}
	});
}

function checkSubject(SubjectID){
	$(SubjectID).on('change', function(){
		var SubjectSelector = $(this);
		var errorSelector = SubjectSelector.siblings('.error');

		if (SubjectSelector.val() == ""){
			errorSelector.text("").text("You did NOT enter the subject.");
		}
		else{
			errorSelector.text("");
		}
	});
}

function checkMessage(MessageID){
	$(MessageID).on('change', function(){
		var MessageSelector = $(this);
		var errorSelector = MessageSelector.siblings('.error');

		if (MessageSelector.val() == ""){
			errorSelector.text("").text("You did NOT enter message.");
		}
		else{
			errorSelector.text("");
		}
	});
}





