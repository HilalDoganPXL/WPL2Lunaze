'use strict'

let producten = [{
    type: "Lu Safe",
    price: "200",
    quantity:0
},
    {
        type: "Lu Rax",
        price: "200",
        quantity:0
    },
    {
        type: "luna Pro",
        price: "300",
        quantity:0
    },
];


















/*
//functions
function products(){
    let productnaam = document.getElementById("gekozenproduct");
    let gekozenproduct = document.getElementById("product_form");
    let result = gekozenproduct.options[gekozenproduct.selectedIndex].value;
    productnaam.innerHTML = result;
}
function addEvents(){

}
products();
 */

function handleLoad() {
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;

    document.getElementById("button_create").addEventListener("click", create_user);
}


function create_user() {

    if (password === "") {
        alert("fill password in");
        return false;
    }

    if (password.length < 4) {
        alert("**Password length must be atleast 4 characters");
        return false;
    }

    if (password === confirm_password) {
        return true;
    } else {
        alert("not same passwd");
        return false;
    }
}


function fetchRegister() {
    let email = document.getElementById("email_signup").value;
    let username = document.getElementById("username_signup").value;
    let password_1 = document.getElementById("password_signup").value;
    let password_2 = document.getElementById("confirm_password_signup").value;

    try {
        if (password_1 === password_2 && password_1.length >= 4) {
            let userInfo = {email, password: password_1, nickname: username};

            fetch(`${_url}/api/Authentication/register`, {
                method: "POST",
                body: JSON.stringify(userInfo),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (response.ok) {
                        let mailRegister = document.getElementById("mail_register");
                        document.getElementById("mail_login").value = mailRegister.value;

                        _messageLabel.style.color = "limegreen";
                        _messageLabel.textContent = "Account is successfully created, you can login";

                    } else {
                        throw new Error(`Response error: ${response.status}, check your login info`);
                    }
                })
                .catch((error) => _exceptionHandling(error));
        } else {
            throw new Error("Make sure all fields are filled in. Check length and similarity of passwords");
        }
    } catch (error) {
        _exceptionHandling(error);
    }
}


function fetchLogin() {
    let email = document.getElementById("mail_login").value;
    let password = document.getElementById("password_login").value;

    if (email !== "" && password !== "") {
        let userInfo = {email, password};

        fetch(`${_url}/api/Authentication/token`, {
            method: "POST",
            body: JSON.stringify(userInfo),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => _getResponse(response))
            .then((token) => {
                sessionStorage.setItem("token", token["token"])
                _messageLabel.textContent = "";
                window.location.href = "lobby.html";
            })
            .catch((error) => _exceptionHandling(error));
    }
}

function _exceptionHandling(error) {
    alert(error);
}

window.addEventListener("load", handleLoad);





let klantgegevens = [{gebruikersnaam: "tom", paswoord: "test"}, {gebruikersnaam: "dorien", paswoord: "12345"}];
document.getElementById("inloggen").addEventListener('click', gegevensControleren);

function gegevensControleren() {
    let ingegevennaam = document.getElementById("gebruikersnaam").value;
    let ingegevenpaswoord = document.getElementById("paswoord").value;
    for (let teller = 0; teller < klantgegevens.length; teller++) {
        if (klantgegevens[teller].gebruikersnaam === ingegevennaam) {
            if (klantgegevens[teller].paswoord === ingegevenpaswoord) {
                alert("Welkom " + klantgegevens[teller].gebruikersnaam + "!");
            } else {
                alert("Wachtwoord en/of gebruikersnaam is fout!");
            }
        }
    }
}

