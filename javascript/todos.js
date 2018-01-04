var addTodo = function () {
	if(validateTodoForm()){
		createTodo();
		console.log("Todo created!");
	} else {
		return false;
	}
}

var prepareNewTodo = function () {
	return new Todo(
		document.getElementById('title').value,
		document.getElementById('date').value,
		getCategories(),
		document.getElementById('reminder-date').value,
		getIsPublic(),
		false
	)
}

var getCategories = function () {
	var catEls = document.getElementsByClassName('categories');
	var categories = [];

	for(let i=0; i < catEls.length; i++){
		if(catEls[i].checked) {
			categories.push(catEls[i].value);
		}
	}
	return categories;
}

var getIsPublic = function () {
	var eles = document.querySelectorAll("input[name='isPublic']")
	for(let i=0; i< eles.length; i++) {
		if(eles[i].checked){
			return eles[i].value;
		}
	}
}

var toggleReminderDate = function (field) {
	var reminderDatePicker = document.querySelector("div[data-reminder-date]");
	if(field.checked) {
		reminderDatePicker.style.display = 'block';
	} else {
		reminderDatePicker.style.display = 'none';
	}
}

var lastTodoIndex = function () {
	var index;
	try {
		index = parseInt(Object.keys(JSON.parse(localStorage.todos)).sort().splice(-1)[0]);
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