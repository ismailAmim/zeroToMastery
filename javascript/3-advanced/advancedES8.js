const text = "paul";
console.log(text.padStart(10));
// add 10 blank spaces at the start
//         end

console.log(text.padEnd(10), "end");
// add 10 blank spaces at the end
// paul       end

const fun = (a, b, c, d, ) => {
    console.log(a);
}
fun(1, 21, 3, 5, );
// 1


// Object.values
// Object.entries
const obj = {
    username1: "santa",
    username2: "rudolf",
    username3: "paul"
};
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

/*
username1 santa
username2 rudolf
username3 paul
*/
Object.values(obj).forEach((value) => {
    console.log(value);
});
/*
santa
rudolf
paul

*/

Object.entries(obj).forEach((value) => {
    console.log(value);
});

/*
["username1", "santa"]
["username2", "rudolf"]
["username3", "paul"]
*/

Object.entries(obj).map((value) => {
    return value[1] + " id " + value[0].replace("username", "");
});

["santa id 1", "rudolf id 2", "paul id 3"]