var inp = document.querySelector("#inp");
var btn = document.querySelector("#btn");
var listBox = document.querySelector("#listBox");
var count = 0;

btn.addEventListener(
    "click",
    addToList
)
inp.addEventListener(
    "keyup",
    function (e) {
        if (e.key == "Enter") {
            addToList();
        }
    }
)

function addToList() {
    var num = inp.value;
    if (num.length == 0) {
        inp.focus();
    } else {
        var listItem = document.createElement("li");
        listItem.innerHTML = `<span class="token">${++count}</span>
            ${num}
        <span class="del" onclick="delMe(this)">
            <i class="fa-solid fa-trash"></i>
        </span>`;

        listBox.appendChild(listItem);
        inp.value = "";
        inp.focus();

        listItem.addEventListener(
            "click",
            function () {
                listItem.classList.toggle("done");
            }
        )
    }
}

function delMe(span) {
    span.parentNode.remove();
}