window.onload = function() {
    alert("JavaScript Alert Example!")
};

function changeText() {
    var heading = document.getElementById("demo")
    heading.textContent = "New Text!"
    heading.style.color = "white";
}

var menu = [
    "eggs",
    "sausage",
    "bacon",
    "toast"
]

let menu = document.getElementById("menu");