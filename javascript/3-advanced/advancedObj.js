// reference type
/*
the first array and the second have diffrent ref
[] === []
false

[1] === [1]
false
*/
let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };
/*
obj1 === obj2
true
obj1 === obj3
false

when we change the obj1 value the obj2 change too
because they have the same refrence

obj1.value=100
100
obj2.value
100

but obj3 has a different ref
obj3.value
10
*/

//context vs scope

// what the object environment we are right now 
// object environment === context 

console.log(this);
//Window  { 0: global, window: Window, self: Window, document: document, name: "", location: Location,  … }
// we are in the root window environment
// we check if true 
// this define what an object we are inside it

console.log(this === window);
//true
//  the function b() is still inside the window environment
function b() {
    console.log(this);
}

// b();
// Window  { 0: global, window: Window, self: Window, document: document, name: "", location: Location,  … }

// to create a context in  an oject
const obj4 = {
    a: function() {
        console.log(this);
    }
};
/* 
return the obj4 
{a: ƒ}

*/


//instantiation
// instantiation in javascript
class Player {
    constructor(name, type) {
        console.log('play', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`hi i am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        // super to call the player constructor
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard("shelly", "healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
/*
play Wizard  {}
wizard Wizard  { name: "shelly", type: "healer" }

play Wizard  {}
wizard Wizard  { name: "Shawn", type: "Dark Magic" }

*/