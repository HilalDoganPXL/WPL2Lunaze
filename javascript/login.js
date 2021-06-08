'use strict'

const objUsers = [
    {
        email_login:"Hila",
        password_login:"doga"
    },
    {
        email_login:"kou",
        password_login:"ela"
    },
    {
        email_login:"Meto",
        password_login:"kona"
    }
]


function handleLoad() {
    document.getElementById("btn_login").addEventListener("click", login);
}

window.addEventListener("load", handleLoad);

function login(){
    let usrn = document.forms ["inlog_form"]["email"].value
    window.location.href = "../html/home.html";
}

