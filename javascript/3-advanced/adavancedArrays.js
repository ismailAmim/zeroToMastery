const array = [1, 2, 10, 16];
//forEach number in the array multiply by 5
const newArray = array.forEach((num) => {
    num * 5;
});
console.log(newArray);
/*
undefined
because forEach will not change the array

solution 
create an array and push the result of forEach in it; 
*/
const newAr = [];
const newArray = array.forEach((num) => {
    newAr.push(num * 5); // we should push the result in the new array
});
console.log(newAr);

// map an array
// same as forEach but can change the array
const mapArray = array.map((num) => {
    return num * 5;
    // return value and make changes
});

// other cleaner syntax of map 
const mapArray =
    array.map(num => num * 5);

console.log('map', mapArray);
// (4) [5, 10, 50, 80]

// filter 
const filterArray =
    array.filter(num => num > 5);
console.log('filter', filterArray);

// filter (2) [10, 16]

// reduce
// can do map and filter in the same time

const reduceArray = array.reduce((accumulator, num) => { return accumulator + num }, 0);
console.log("reduce ", reduceArray);
// reduce  29