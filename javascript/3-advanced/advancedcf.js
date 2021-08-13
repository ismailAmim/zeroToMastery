// ternary operator
// condition ? if true exp1 :  else exp2
function isUserValid(bool) {
    return bool;
}
var answer = isUserValid(true) ? " ok hello " : "access denied";

var answer = isUserValid(false) ? " ok hello " : "access denied";
/*
undefined
answer
"access denied"
*/

var automatedAnswer = " your account is  " + (isUserValid(true) ? " 123 " : "not availabe");
/*
answer
" ok hello "
*/

//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// var experiencePoints = winBattle()? 10 : 1;






//switch cases

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found  a river";
            break;
        case "left":
            whatHappens = "you run into  a troll";
            break;
        default:
            whatHappens = "please enter a valid direction"
    }
    return whatHappens;
}

console.log(moveCommand("right"));
// you found a river

console.log(moveCommand("forward"));
/*
undefined
because of  first  break 
the program will not do anything
undefined
*/