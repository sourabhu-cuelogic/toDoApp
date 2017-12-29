var User = function(email, firstName, lastName, gender, address, profileImage) {
	this.email = email;
	this.firstName = firstName;
	this.lastName = lastName;
	this.gender = gender;
	this.address = address;
	this.profileImage = profileImage;
}

var lastUserIndex = function () {
	var index;
	try {
		index = parseInt(Object.keys(JSON.parse(localStorage.users)).sort().splice(-1)[0]);
		if(index == undefined || index == NaN){
			return 0;
		} else {
			return index;
		}
	}
	catch(e) {
		console.log("Error: " + e);
		return 0;
	}
}

var fetchCurrentUser = function () {
	var user_id;
	user_id = localStorage.getItem('user_id');
	return JSON.parse(localStorage.users)[user_id];
}

var loginUser = function (user_id) {
	localStorage.setItem('user_id', user_id);
}
