var css = document.getElementsByTagName("h3")[0];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

/* console.log(css);
console.log(color1);
console.log(color2); */

body.style.background = "red";

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " + color2.value + ", " + color1.value +
        ' )';
    css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


var fun = 5;

function funFunction() {
    var fun = "test";
    console.log(1, fun);
}

function funestFunction() {
    fun = "ahhhh"
    console.log(3, fun);
}
funFunction();
funestFunction();
console.log(fun);