var addTodo = function () {
	if(validateTodoForm()){
		createTodo();
		console.log("Todo created!");
		redirectTo("todos.html");
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
		false,
		""
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

var todosRow = function() {
	var todos = Todo.all();
	var table = document.getElementsByClassName('table')[0];
	var tBody = table.tBodies[0];
	var todosCount = Object.keys(todos).length;
	var actionsMapper = { 0:'show', 1:'edit', 2:'delete' }
	
	for (let todoKey in todos) {
	    let todo = todos[todoKey];
	    let row = table.insertRow(table.rows.length);
	    row.setAttribute("data-id", todoKey);
	    let cellCounter = 0;

	    for(let key in todo){
	        let cell = row.insertCell(cellCounter);
	        let value = todo[key] == "" ? "N/A" : todo[key];
	        cell.innerText = value;
	        row.appendChild(cell);
	        cellCounter++;
	    }

	    // Adding action buttons
	    for(let i=0; i < 3; i++){
	        let buttonType = actionsMapper[i];
	        let className = (buttonType == 'delete') ? 'btn btn-danger' : 'btn btn-default';
	        let aTag = document.createElement('a');
	        let cell = row.insertCell(cellCounter);
	        aTag.setAttribute('href', "javascript:"+buttonType+"Todo("+todoKey+");");
	        aTag.setAttribute('class', className);
	        aTag.innerText = buttonType.toUpperCase();
	        cell.setAttribute('data-id', todoKey);
	        cell.appendChild(aTag);
	        cellCounter++;
		    row.appendChild(cell);
	    }
	    tBody.appendChild(row);
	}
}

var deleteTodo = function(id) {
	var row = document.querySelector("tr[data-id='"+id+"']");
	row.remove();
	Todo.destroy(id);
	alert("Todo has been deleted successfully!");
}

var toggleTodoForm = function (desiredState) {
	let form, todoList;
	if(desiredState == 'open'){
		form = 'block';
		todoList = 'none';
	} else {
		todoList = 'block';
		form = 'none';
	}
	document.getElementsByClassName('todo-form')[0].style.display = form;
	document.getElementsByClassName('well')[0].style.display = todoList;
}

var toggleTodoShow = function (desiredState) {
	let form, todoList;
	if(desiredState == 'open'){
		form = 'block';
		todoList = 'none';
	} else {
		todoList = 'block';
		form = 'none';
	}
	document.getElementsByClassName('todo-form')[0].style.display = form;
	document.getElementsByClassName('well')[0].style.display = todoList;
}

var editTodo = function (id) {
	alert(id);
}

var showTodo = function (id) {
	let todo = Todo.find(id);
	console.log(JSON.stringify(todo));
	var eles = ['title', 'date', 'categories', 'reminderDate', 'isPublic', 'isDone', 'attachment'];
	for(let i=0; i < eles.length; i++){
		let text;
		if(eles[i] == 'isPublic'){
			text = todo[eles[i]] == '0' ? 'No' : 'Yes';
		} else {
			text = todo[eles[i]] == "" ? "N/A" : todo[eles[i]];
		}
		let tag = document.getElementsByClassName("todo-"+eles[i])[0];
		tag.innerText = text;
	}
}