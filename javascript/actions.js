var signup = function () {
	if(validateForm()){
		createUser();
	} else {
		return false;
	}
}

var prepareUser = function(form) {
	var user = new User(
		form.firstName.value;
		form.lastName.value;
		form.gender.value;
		form.address.value;
	)
}

// Create/Update user
var createUser = function () {
	user = prepareUser(document.form);
	// saveUser(user);
	localStorage.setItem(
		'users', [JSON.stringify(user)]
	)
}