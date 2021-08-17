// Complete the below questions using this array:
const array = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arUser = [];
const newar = array.forEach((user) => {
    arUser.push(user.username + '!');
});
console.log(arUser);
// [ ]
// (4) ["john!", "becky!", "susy!", "tyson!"]

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map(user => {
    let { username } = user;
    return username + "?";
})

// or 
const newMap = array.map(
    user => user.username + '?'
);
console.log(newMap);

//Filter the array to only include users who are on team: red

const newFilter = array.filter((user) => {
    if (user.team === "red") {
        return user;
    }
});
// or 
const filterArray = array.filter(user => {
    return user.team === "red";
})
console.log(filterArray);
console.log(newFilter);



/*
(2) [{…}, {…}]
0: {username: "john", team: "red", score: 5, items: Array(3)}
1: {username: "susy", team: "red", score: 55, items: Array(3)}


*/

//Find out the total score of all users using reduce
const totalScore = array.reduce((ac, user) => {
    return ac + user.score
}, 0);
console.log(totalScore);
// 71

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});
// i = 5
// pureFunc  
const pureFunc = arrayNum.map(num => num * 2);
// or 
const newArray = arrayNum.map((num, i) => {
    return num * 2;
})


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newList = array.map(user => {
    user.items = user.items.map(item => {
        return item + '!';
    });
    return user;
});