/*var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
*/

/*
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    console.log("click");
});*/
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

/* dry principles  to not repeat code 
   create functions for repeated code
*/
function inputLength() {
    return input.value.length;
}

function createDeleteButton(li) {
    var rbtn = document.createElement("button");
    rbtn.classList = "deleteButton";
    rbtn.appendChild(document.createTextNode("remove"));
    li.appendChild(rbtn);
    rbtn.addEventListener("click", function() {
        this.parentElement.remove();
    })
}

function createListElement() {
    console.log("click is working");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    createDeleteButton(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

input.addEventListener("keypress", addListAfterKeypress);
/*
function addAllBtnsDelete() {
    var elements = ul.children;
    elements.forEach(function(el) {
         el.addEventListener("click", createDeleteButton());
     });
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", createDeleteButton);
    }
}
addAllBtnsDelete();*/

/*
li.addEventListener("click", toggleAfterClick);*/
/*
function addButtonDelete() {
    ul.children.forEach(l => {
        l.appendChild(document.createElement("button"));
    });
}*/