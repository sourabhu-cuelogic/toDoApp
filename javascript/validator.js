// Same user can not register again.
var validateUser = function () {
    // TODO : code here;
}

var validateForm = function () {
    var validated = true;
    fields = document.getElementsByClassName('field');
    for(let i=0; i < fields.length; i++){
        if(fields[i].value == "" && validated == true){
            validated = false;
            alert("Please filled all mandatory fields!");
        }
    }
    var passMatch = passwordChecker();
    return (validated && passMatch);
}

var validateField = function(field, msg) {
    if(msg == undefined) {
        msg = "Please filled mandatory fields.";
    }
    if(field.value == "") {
        validationHighlighter(field, msg);
    } else if(field.name == 'email' && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(field.value)) {
        // Validating E-mail field.
        validationHighlighter(field, msg);
    } else {
        removeValidationHighlighter(field);
    }
}

var validationHighlighter = function(element, msg){
    element.parentNode.className = 'form-group has-error';
    element.nextElementSibling.innerHTML = msg;
    element.nextElementSibling.style.display = "block";
}

var removeValidationHighlighter = function(element){
    element.parentNode.className = 'form-group';
    element.nextElementSibling.style.display = 'none';
}

var passwordChecker = function() {
  if (form.password.value !=
    form.confirmPassword.value) {
    validationHighlighter(form.confirmPassword, 'Passwords do not match!');
    return false;
  } else {
    removeValidationHighlighter(form.confirmPassword);
    return true;
  }
}
