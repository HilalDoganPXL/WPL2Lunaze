'use strict'

// Function to add event listener to table
//let up = document.getElementById("up");
/*let uppage = document.getElementById('up');

uppage.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
*/

//document.addEventListener("click", topFunction);
//up.document.addEventListener("click", topFunction);

let go_up = document.getElementById("btn_up");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        go_up.style.display = "block";
    } else {
        go_up.style.display = "none";
    }
}
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

go_up.addEventListener("click", backToTop);



