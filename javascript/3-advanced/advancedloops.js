const basket = ['apples', 'oranges', 'grapes'];

//1 
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}
// 2
basket.forEach(item => {
    console.log(item);
});
// 3 ES6  for of
// iterating  arrays, strings , object
// iterable properties
for (item of basket) {
    console.log(item);
}
for (item of 'basket') {
    console.log(item);
}

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// enumerating objects
//  for in - object properties
// enumerable properties
for (item in detailedBasket) {
    console.log(item);
}