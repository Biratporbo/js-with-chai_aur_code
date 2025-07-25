const score = 400
const balance = new Number(100)

console.log(score)
console.log(balance)

console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++ Math Object ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 10);  // Random number between 0 and 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20