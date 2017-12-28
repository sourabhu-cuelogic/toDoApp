// Same user can not register again.
var validateUser = function () {
    // TODO : code here;
}

var validateForm = function () {
    var form = document.form;
    var validated = true;
    if (form.email.value == "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(form.email.value)) {
        console.log("E-mail highlighter!");
        validationHighlighter(form.email);
        validated = false;
    } else {
        console.log("ELSE E-mail highlighter!");
        removeValidationHighlighter(form.email);
    }
    if (form.firstName.value == "") {
        console.log("First Name highlighter!");
        validationHighlighter(form.firstName);
        validated = false;
    }else {
        console.log("ELSE first name highlighter!");
        removeValidationHighlighter(form.firstName);
    }
    if (form.lastName.value == "") {
        console.log("Last name highlighter!");
        validationHighlighter(form.lastName);
        validated = false;
    }else {
        console.log("ELSE Last name highlighter!");
        removeValidationHighlighter(form.lastName);
    }
    if (form.address.value == "") {
        console.log("address name highlighter!");
        validationHighlighter(form.address);
        validated = false;
    }else {
        console.log("ELSE address name highlighter!");
        removeValidationHighlighter(form.address);
    }

    return true;
}

var validationHighlighter = function(element){
    element.parentNode.className = 'form-group has-error';
}

var removeValidationHighlighter = function(element){
    element.parentNode.className = 'form-group';
}