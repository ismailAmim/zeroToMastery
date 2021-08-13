/* javascript 
"ismail"
"ismail"

'ismail'
"ismail"

"hello" +" there"
"hello there"

"this isn't vey ood"
"this isn't vey ood"

'this isnt"cood'
"this isnt\"cood"

'tthis isn\'t good'
"tthis isn't good"

10 + "34"
"1034"

 "hello" + "world"
"helloworld"

"hello" - "wworld"
NaN

boolean

true
true

false
false

3>2
true

5>10
false

3=3
VM834:1 Uncaught SyntaxError: Invalid left-hand side in assignment

3===3
true

3!=3
false

4!==5
true

3!=4
true


variables
"the moon is white " + "!";
"the moon is white !"
var george = "taher is ok !!!"
undefined
george
"taher is ok !!!"
3===3
true
var 3=3;
VM1985:1 Uncaught SyntaxError: Unexpected number

var three = 3;
undefined

var _azerty= 14
undefined

_azerty
14

var __azzerty=45
undefined

__azzerty
45

prompt()
"ssd"

prompt(" what is your name")
"andrei"

var tok = prompt("enter tok")
undefined

var tok = prompt("enter tok")
undefined

tok
"sbsdb"

Number("15")
15

var second = prompt()
undefined

Number(second)
15

var sum = Number("45") + 75;
undefined

sum
120

var first = Number("89")
undefined

var sm= Number(second)+first
undefined

sm
104

alert ("the sum is : " + sum)
undefined

var a:
VM3026:1 Uncaught SyntaxError: Unexpected token ':'

var a;
undefined
 
var b ;
undefined

prompt("first number ")
"145"

var first = Number(prompt("first num"))
undefined
first
14

var second = Number(prompt("second num"))
undefined
second
78

alert(first + second)
undefined
14 + 15

alert(first * second)
undefined
14* 15

alert (first / second)
undefined
alert (first - second)
undefined

name ="billy";
if (name === "billy") {
    alert("hi belly");
}

if (name === "billy") {
    alert("hi belly");
}else {alert("hi susy");}

if (name ==="billy" || name ==="Susy") {
    alert("hi Susy");}
result alerted 'hi Susy'

if (name ==="billy" && name ==="Susy") {
    alert("hi Susy");}
undefined
name
"Susy"

if(firstname === "paul" && lastname === "omar" ) {
    alert("hi bob smith");}

if(!(name === "palll")){
    alert("hi  ismail");}

*/
/*
4 + 3;
if ((4 + 3) === 7) {
    //alert("it's true :  (4 + 3) === 7");
    console.log("hello");
}

function sayHello() {
    console.log("hello");
}
sayHello();
var sayBye = function() {
    console.log("bye");
}
sayBye();

function sign(song) {
    console.log(song);
}
sign("laaa deee daaaa");

function multiply(a, b) {
    console.log(a * b);
    if (a > 10 || b > 10) {
        return "that's too hard ";
    } else {
        return a * b;
    }
    return a * b;
}
alert(multiply(5, 18));

var chekDriverAg2 = function() {
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}*/

/*
var ar =["azer","cat","dog","bear"];
undefined
console.log(ar[0]);
VM883:1 azer
undefined

var nmbrs = [1,21,45]
undefined
var booleans = [true,false]
undefined
var functionlist = [ function apple(){console.logg("apple")}]


var mixedlist = ["apples", 3, undefined, true];
var gh = [["tiger","cat","bear"]]
undefined
console.log(gh[0][1]);
cat

ar.shift();
"azer"
ar
(3) ["cat", "dog", "bear"]

ar.pop();
"bear"
ar
(2) ["cat", "dog"]

ar.push("elephant");
3
ar
(3) ["cat", "dog", "elephant"]


ar
(3) ["cat", "dog", "elephant"]
ar.concat(["bee", "deer"]);
(5) ["cat", "dog", "elephant", "bee", "deer"]

ar
(3) ["cat", "dog", "elephant"]
ar.sort();
(3) ["cat", "dog", "elephant"]



var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
"Banana"
array
(3) ["Apples", "Oranges", "Blueberries"]

array.sort();
(3) ["Apples", "Blueberries", "Oranges"]

array.push("kiwi");
4
array
(4) ["Apples", "Blueberries", "Oranges", "kiwi"]

(4) ["Apples", "Blueberries", "Oranges", "kiwi"]
array.splice(0,1);
["Apples"]
array
(3) ["Blueberries", "Oranges", "kiwi"]

array.reverse();
(3) ["kiwi", "Oranges", "Blueberries"]

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

array2 [1] [1] [0]
"Oranges"

var user = {
    name: "john",
    age: 32,
    hobby: "soccer",
    isMarried: false,
    spells: ["dfg", "omg"],
     method
    shout: function() {
        console.log("ahghgh");
    }
}




/*
object is a dynamic dtat structure
user
{name: "john", age: 32, hobby: "soccer", isMarried: false}age: 32hobby: "soccer"isMarried: falsename: "john"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
user.favourate= "pizza"
"pizza"
user.isMarried = true;
true
*/

/*
list of objects

var list = [{
        username: "ismail",
        passwword: "dfdf"
    },
    {
        username: "ishaz",
        passwword: "amim"
    }

]

/* list[1].username
"ishaz" 
empty object
user2 ={}
 list2 = []

var emptyobj = {}
undefined
var nullob = null;
undefined
emptyobj
{}
nullob
null
nullob.name = "paull"
VM663:1 Uncaught TypeError: Cannot set property 'name' of null
    at <anonymous>:1:13
(anonymous) @ VM663:1
emptyobj.name = "azerty"
"azerty"

*/

var database = [{
    username: "ismail",
    password: "test"
}, {
    username: "sally",
    password: "test2"
}, {
    username: "ingrid",
    password: "777"
}];

var newsFeed = [{
        username: "boob",
        timeline: "ok for taking new adventure"
    },
    {
        username: "saily",
        timeline: "it is time to learn javascript"
    }
];

var usernamePrompt = prompt("what\'s your name ?");
var passwordPrompt = prompt("what\'s your password ?");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    console.log(isUserValid(username, password));

    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("sorry , wrong username or password");
    }
}
signIn(usernamePrompt, passwordPrompt);



/* function declaration
function newfunction(){

}

function expression
var newfunction = function(){

calling a function
newfunction(param1, param2)

function vs method
function thisisfunction () {

}

method in an object
user = {
    name : "paul",
    method : function () {

    }
}
user.method;

loops
for 
while
do 
forEach


var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    todos.pop();
}

var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);
*/
/*
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    console.log(todos[i], i);
}
*/
/**  foreach function take the array each elemtn of an array and the index in second argument */
/*
todos.forEach(function(todo, i) {
    console.log(todo, i);
});

/* so you can use logTodos from multiple arrays 
function logTodos(todo, i) {
    console.log(todo, i);
}
todos.forEach(logTodos);

function(todo, i) {
    console.log(todo, i);
}

await	break	case	catch	class
const	continue	debugger	default	delete
do	else	enum	export	extends
false	finally	for	function	if
implements	import	in	instanceof	interface
let	new	null	package	private
protected	public	return	super	switch
static	this	throw	try	true
typeof	var	void	while	with
yield	 


*/