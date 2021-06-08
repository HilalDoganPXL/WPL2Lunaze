'use strict'


let types = ["type", "Luna Pro","Lu Safe", "Lu Rax"];
let tekst = ["l'unazé", "We attach great importance to the right to live in safety, but also to people’s mental health." +
"That is why we developed the LunaPro, a high-tech ring that makes life easier in this way."
, "Feeling safe and comfortable is our priority. That is why we developed the LunaPro, a combination of our Lu Rax and Lu Safe rings. " +
    "This ring offers you safety through our SOS function, but also a relaxed feeling through the relaxation function.",
"You can use the ring by projecting calming visuals through the hologram feature incorporated into the ring. " +
"Through the app you can also play calming music or consult advice and tips from therapists."];




function handleLoad() {
    alert("deneme");
document.getElementById("btn_add_cart").addEventListener('click',aantalKeerKlikken);
document.getElementById("btn_login").addEventListener("click", login);

}

window.addEventListener("load", handleLoad);

let aantalClicks = 0;

function aantalKeerKlikken() {
    aantalClicks++;
    document.getElementById("aantal_in_winkelmand").innerHTML =  aantalClicks;
}

function login(){
    document.location.href = "../html/home.html";
    alert("welkom");
}




//const fm = document.querySelector('#product_form')
//options.addEventListener(onclick(),)
//options.onchange = (event) => {
//    event.preventDefault();
//    // show the selected index
//    alert(fm.selectedIndex);
//    alert(fm.selectedIndex(2));
//    document.getElementById("gekozenproduct").innerHTML = fm.selectedIndex;
//}


value.document.addEventListener("click", selected_ring)

function selected_ring(){
    let form =document.getElementById("product_form");
    let value = form.value;



    alert(types[value]);
    document.getElementById("gekozenproduct").innerHTML = types[value];
    document.getElementById("description_product").innerHTML

    //let value = document.getElementById("product_form").value;
}









