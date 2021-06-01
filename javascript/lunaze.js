'use strict'

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