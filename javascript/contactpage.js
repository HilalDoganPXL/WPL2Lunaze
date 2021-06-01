function validateForm(name,email,message) {

    if (name == "") {
        alert("please provide your name!")
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        name.focus();
        return false;
    }

    if (email.empty()) {
        alert("please provide your email!")
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        email.focus();
        return false;
    } else {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            email.focus();
            return false;
        }
    }

    if (message.empty()) {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        message.focus();
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
}
let name =  document.getElementById('name').value;
let email =  document.getElementById('email').value;
let message =  document.getElementById('message').value;

document.getElementById('contact-form').addEventListener('submit', validateForm(name,email,message));

