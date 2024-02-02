var overlay = document.getElementById("overlay");
var mainImg = document.getElementById("mainImg");

function getSrc(elem) {
    mainImg.src = elem.src;
    overlay.style.transform = "scale(1)";
}
function closeOverlay(){
    overlay.style.transform = "scale(0)";
}