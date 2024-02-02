var titles = document.getElementsByClassName("title");
var paras = document.getElementsByClassName("para");
var arrows = document.getElementsByClassName("arrow");

function togglePara(index) {

    if (paras[index].style.display == "none") {
        for (p of paras) {
            p.style.display = "none";
        }
        for (a of arrows) {
            a.style.transform = "rotate(0deg)";
        }
        paras[index].style.display = "block";
        arrows[index].style.transform = "rotate(180deg)";
    }
    else {
        paras[index].style.display = "none";
        arrows[index].style.transform = "rotate(0deg)";
    }

}