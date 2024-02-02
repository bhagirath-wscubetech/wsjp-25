var bars = document.querySelector("#bars");
var close = document.querySelector("#close");
var menu = document.querySelector("#menu");

bars.addEventListener(
    "click",
    function(){
        menu.style.top = 0;
    }
)
close.addEventListener(
    "click",
    function(){
        menu.style.top = "";
    }
)