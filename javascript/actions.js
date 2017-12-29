var showProfilePage = function () {
	window.location = "users/profile.html";
}

var attachHandlers = function () {
	document.getElementById("signup").addEventListener("click", function(event){
		event.preventDefault();
		if(validateForm()){
			// preventDefault();
			createUser();
			console.log("created User");
			showProfilePage();
		} else {
			return false;
		}
	});
}

var signup = function () {
	if(validateForm()){
		preventDefault();
		createUser();
		console.log("created User");
		showProfilePage();
	} else {
		return false;
	}
}

var prepareUser = function(form) {
	return new User(
		form.email.value,
		form.firstName.value,
		form.lastName.value,
		form.gender.value,
		form.address.value
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
	loginUser(nextUserId);
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
