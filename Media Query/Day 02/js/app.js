var bars = document.querySelector("#bars");
var menu = document.querySelector("#menu");

bars.addEventListener(
    "click",
    function () {
        menu.classList.toggle("open-menu");
        bars.classList.toggle("fa-bars");
        bars.classList.toggle("fa-times");
    }
)