$(document).ready(function () {

	
	let pass = "1want2teach!";
	//console.log(pass);
	
	let users = ["mleary@2u.com", ""];
	let userEntry = $('#email').val();
	
	$('#submit').click(function () {
		if (users.includes(userEntry) && $('#pass').val() === pass) {
			alert("you're in");
		}
	});
});

