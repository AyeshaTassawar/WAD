let greeting = "Welcome";
for (let letter of greeting) {
    console.log(letter);
}

let scores = [78, 92, 88, 53, 71, 84];
let total = 0;
for (let score of scores) {
    total += score;
}
let average = total / scores.length;
console.log(`Average Score = ${average}`);

let prices = [120, 245, 310, 190, 275, 150];
let index = 0;
for (let price of prices) {
    console.log(`Price at index ${index} = ${price}`);
    index++;
}

let groceries=["potato","apple","leeche","tomato"];
console.log(groceries);
console.log(groceries.toString());
console.log(groceries);

let avengers = ["captain america", "hulk", "black widow"];
let xmen = ["wolverine", "cyclops"];
let superTeam = avengers.concat(xmen);
console.log(superTeam);

let removedHero = avengers.shift();
console.log("Removed Hero:", removedHero);

avengers.unshift("doctor strange");
console.log(avengers);

function welcomeUser(username) {
    return `Hi there, ${username}!`;
}
console.log(welcomeUser("Ali"));

const calculateArea = (length, width) => {
    return length * width;
};
console.log(calculateArea(4, 6));

let numbers = [45, 44, 43, 42];
numbers.map((number) => {
    console.log(number);
});

let squareNum = (num) => {
    console.log(num * num);
};

console.log("New Array:");
let updatedArray = numbers.map((number) => number * 2);
console.log(updatedArray);

let squareValue = (num) => {
    console.log(num * num);
};
