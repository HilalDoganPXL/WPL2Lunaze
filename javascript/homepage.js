'use strict'


function handleLoad() {
    document.getElementById("btn_up").addEventListener("click", go_up);
   alert("test");
}

window.addEventListener("load", handleLoad);


function go_up(){
    window.scrollTo(0, 1)
}


