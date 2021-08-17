var a = 5;
// we just copy value not reference
var b = a;
b++;
console.log(a);
// 5 
console.log(b);
// 6

let obj1 = { name: "ismail", password: "123" };
// we assign obj2 the refrence of obj1
let obj2 = obj1;
// obj1 and obj2 are pointin to the same reference
obj2.password = "easy";

console.log(obj1);
// {name: "ismail", password: "easy"}
console.log(obj2);
// {name: "ismail", password: "easy"}

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(11425);
console.log(c);
//(6) [1, 2, 3, 4, 5, 11425]

// to clone an array in another one
let f = [].concat(c);
f.push(45);
console.log(c);
// [1, 2, 3, 4, 5, 11425]
console.log(f); 
// [1, 2, 3, 4, 5, 11425, 45]

// to clone an object
let obj = { a: 'a', b: 'b', c: 'c' };
let clone = Object.assign({}, obj);
let clone2 = {...obj };

obj.c = 5;
console.log(clone);
console.log(clone2);
console.log(obj);

//
let obj = { a: 'a', b: 'b', c: { deep: 'try me' } };
let clone = Object.assign({}, obj);
let clone2 = {...obj };

// we call shallow clone
// clone top level object cloning 
// to overcome
obj.c.deep = "haa";
console.log(clone);
console.log(clone2);
console.log(obj);

/* {a: "a", b: "b", c: {…}}
a: "a"
b: "b"
c: {deep: "haa"}
{a: "a", b: "b", c: {…}}
a: "a"
b: "b"
c: {deep: "haa"}
{a: "a", b: "b", c: {…}}
a: "a"
b: "b"
c: {deep: "haa"} 

*/

// we call shallow clone
// clone top level object cloning 
// to overcome
let obj = { a: 'a', b: 'b', c: { deep: 'try me' } };
// just translate obj to json to keep all structure
let superClone = JSON.parse(JSON.stringify(obj));

obj.c = "5";
console.log(obj);
/* {
"a": "a",
"b": "b",
"c": "5"
}*/
console.log(superClone);
/*{
"a": "a",
"b": "b",
"c": {
    "deep": "try me"
}
}*/