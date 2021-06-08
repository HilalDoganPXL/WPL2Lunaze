'use strict'


function handleLoad() {
    document.getElementById("btn_up").addEventListener("click", go_up);
    document.getElementById("btn_add_cart").addEventListener('click',aantalKeerKlikken);
}
window.addEventListener("load", handleLoad);

function go_up(){
    window.scrollTo(0, 1)
}

let aantalClicks = 0;

function aantalKeerKlikken() {
    aantalClicks++;
    document.getElementById("aantal_in_winkelmand").innerHTML =  aantalClicks;
}





