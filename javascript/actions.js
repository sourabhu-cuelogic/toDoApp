// var showProfilePage = function () {
// 	window.location = "users/profile.html";
// }

var redirectTo = function (path) {
	window.location = path;
}

var attachHandlers = function () {
	document.getElementById("signup").addEventListener("click", function(event){
		// event.preventDefault();
		if(validateForm()){
			// preventDefault();
			createUser();
			console.log("created User");
			redirectTo("users/profile.html");
		} else {
			return false;
		}
	});
}

var prepareUser = function(form) {
	return new User(
		form.email.value,
		form.firstName.value,
		form.lastName.value,
		form.gender.value,
		form.address.value,
		form.password
	)
}

// Create/Update user
var createUser = function () {
	var users, nextUserId;
	user = prepareUser(document.form);
	try {
		users = JSON.parse(localStorage.users);
	}
	catch(e){
		users = {};
	}
	nextUserId = lastUserIndex() + 1;
	users[nextUserId] = user;
	localStorage.setItem(
		'users', JSON.stringify(users)
	)
	createUserSession(nextUserId);
}

var userInfo = function() {
	var attrs = ['email', 'gender', 'address'];
	var currentUser = fetchCurrentUser();
	document.getElementById('full-name').innerHTML = currentUser['firstName'] + " " + currentUser['lastName'];
	for(let i=0; i < attrs.length; i++){
		let element = document.getElementsByClassName(attrs[i])[0];
		element.innerHTML = currentUser[attrs[i]];
	}
}

var userProfileForm = function (status) {
	var info, form;
	if(status == 'closed'){
		info = 'block';
		form = 'none';
	} else {
		form = 'block';
		info = 'none';
	}
	document.getElementsByClassName('profile-info')[0].style.display = info;
	document.form.style.display = form;
}

var login = function() {
	var validUser = false;
	var formLogin = document.getElementsByName('form-login')[0];
	var users = JSON.parse(localStorage.users);
	for (var user in users) {
		if(users[user].email == formLogin.email.value && users[user].password == formLogin.password.value) {
			validUser = true;
			createUserSession(user);
			redirectTo("users/profile.html");
		}
	}
	if (!validUser)
		alert("Email and password do not match!")
}

var logout = function() {
	removeUserSession();
	alert("You're logout successfully!");
	redirectTo('../landing.html');
}