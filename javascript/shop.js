'use strict'


function handleLoad() {
    selected_ring();
}

window.addEventListener("load", handleLoad);



function selected_ring(){
    let x =document.getElementById("product_form").selectedIndex;
    alert(x);

}



