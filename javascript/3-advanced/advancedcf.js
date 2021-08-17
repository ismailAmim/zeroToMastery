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


function pushUps(type) {
    var t;
    switch (type) {
        case "r":
            t = "12 normal push-up";
            break;
        case "d":
            t = "16 special push up  with a declined ";
            break;
        case "pr":
            t = "20 push up  and rotation ";
            break;
        default:
            t = " just do any type of push ups 12  in one serie";
    }
    return t;
}
/*
pushUps("gh");
" just do any type of push ups 12  in one serie"
pushUps("r");
"12 normal push-up"
pushUps("d");
"16 special push up  with a declined "
pushUps("pr");
"20 push up  and rotation "
*/

const player = "ismail";
player = "ishaz";
//Uncaught TypeError: Assignment to constant variable.
// const is used for anything that doesn't change
// useful in multiple teams for not 
// you change the properties of the object constant variable 
const obj = {
    palyer: "ismail",
    experience: 100,
    level: false
}
obj = 5; // we can't change the object constant
// Uncaught TypeError: Assignment to constant variable
obj.experience = 200; // wwe can chane the properties value

//obj { palyer: "ismail", experience: 200, level: false }
// deconstruct an boject like 
const { palyer, experience } = obj;

// similar to 
const player = obj.player;
const experience = obj.experience;



const name = "ismail amimour";

const obj = {
        [name]: "hello",
        [1 + 3]: "false"
    }
    // obj { 4: "false", ismail amimour: "hello" }

const a = "ismail";
const b = true;
const c = {};
// if the name of properties and constants are the same 
const obj = {
    a: a,
    b: b,
    c: c
}

// we can simply  and we will use in react
const obj = {
    a,
    b,
    c
}

/* 
obj
{a: "ismail", b: true, c: {…}}
*/

let experience = 100;
let level = false;
if (experience > 90) {
    let level = true;
    console.log("inside ", level);
}
console.log("outside " + level);


const name = "ismail";
const great = "good";
const age = 34;
// new dynamic string template

const var1 = `hello ${name} you seem to be doin ${great} and have ${age - 8} years old`;


// default functions values 
function greatness(name = '', age = 30, pet = 'cat') {
    return `hello ${name} you seem to be ${age-10} , what a lovely ${pet}`;
}
greatness();
// "hello  you seem to be 20 , what a lovely cat" by using default values

// symboles used in object properties declaration
// it create uniue type
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
// sym2 ===sym3
// false


// arrow fuunctions
function add(a, b) {
    return a + b;
}
// the same arrow function is
const add2 = (a, b) => a + b;
/*
add(4, 2);
6
add2(4, 2);
6
*/


// function nested in another function
function first() {
    var great = "hi";

    function second() {
        alert(great);
    }

    return second;
}

var newFunc = first();
newFunc();

// we seperate scopes byy using const or let
const first = () => {
    const great = "hi";
    const second = () => {
        alert(great);
    }
    return second;

}
const newFunc = first();
newFunc();
// alerted Hi

// closures
// children  has access to the parrent scope parameters

//curring
// the process to convert a function 
// that takes multipe actions 
// to another that takes all one of the time
const multiply = (a, b) => a * b;
const curryiedMultiplies = (a) => (b) => a * b;
// b is funtion inside an a function
curryiedMultiplies(3);
// (b) => a * b
curryiedMultiplies(3)(4);
// we use them because are extensible
const multiply5 = curryiedMultiplies(5);
// a parameter takes 5  as value
multiply5(5);
// b parameters used by call of multiply5(b);
/// 25


//compose mixing two funtions in one
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(8);
// 10 :  ((5 + 1)+1);

// avoiding side effect and functional purity