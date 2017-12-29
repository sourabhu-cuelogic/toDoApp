// Same user can not register again.
var validateUser = function () {
    // TODO : code here;
}

var validateForm = function () {
    var form = document.form;
    var validated = true;
    if (form.email.value == "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(form.email.value)) {
        // console.log("E-mail highlighter!");
        validationHighlighter(form.email);
        validated = false;
    } else {
        // console.log("ELSE E-mail highlighter!");
        removeValidationHighlighter(form.email);
    }
    if (form.firstName.value == "") {
        // console.log("First Name highlighter!");
        validationHighlighter(form.firstName);
        validated = false;
    }else {
        // console.log("ELSE first name highlighter!");
        removeValidationHighlighter(form.firstName);
    }
    if (form.lastName.value == "") {
        // console.log("Last name highlighter!");
        validationHighlighter(form.lastName);
        validated = false;
    }else {
        // console.log("ELSE Last name highlighter!");
        removeValidationHighlighter(form.lastName);
    }
    if (form.address.value == "") {
        // console.log("address name highlighter!");
        validationHighlighter(form.address);
        validated = false;
    }else {
        // console.log("ELSE address name highlighter!");
        removeValidationHighlighter(form.address);
    }
    if(form.password.value == "" || form.confirmPassword.value == "") {
        validationHighlighter(form.address);
    } else if {
        if(field.value != "" form.password || field == form.confirmPassword)) {
            form.confirmPassword.nextElementSibling.innerHTML = 'Passwords do not match!'
            validationHighlighter(form.confirmPassword);
            validated = false;
        } else {
            removeValidationHighlighter(field);
        }
    }
    // var fields = [
    //     form.email,
    //     form.firstName,
    //     form.lastName,
    //     form.address,
    //     form.password,
    //     form.confirmPassword
    // ]

    // for (var i = 0; i < fields.length; i++) {
    //     let field = fields[i];
    //     if(field.value == "" || 
    //         field == form.email && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(form.email.value)){
    //         validationHighlighter(field);
    //         validated = false;
    //     } else {
    //         removeValidationHighlighter(field);
    //     }
    //     if(field.value != "" && (field == form.password || field == form.confirmPassword)) {
    //         form.confirmPassword.nextElementSibling.innerHTML = 'Passwords do not match!'
    //         validationHighlighter(form.confirmPassword);
    //         validated = false;
    //     } else {
    //         removeValidationHighlighter(field);
    //     }
    // };

    return validated;
}

var validationHighlighter = function(element){
    element.parentNode.className = 'form-group has-error';
    element.nextElementSibling.style.display = "block";
}

var removeValidationHighlighter = function(element){
    element.parentNode.className = 'form-group';
    element.nextElementSibling.style.display = 'none';
}