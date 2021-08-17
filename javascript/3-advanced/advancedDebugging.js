const lattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce((a, b) => a.concat(b), []);
// reduce nested array
// read the code
// verify  and debug if there is a problem

/*
const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce((accumulator,array) =>{ 
    console.log(accumulator);
    console.log(array);
    return accumulator.concat(array)}
, []);


*/
// to debug we should introduce debugger
const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce((accumulator, array) => {
    debugger;
    return accumulator.concat(array)
}, []);