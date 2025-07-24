const name = "birat"
const age = 22

// console.log( name +  age + " Value"); this not correct code

console.log(`My name is ${name} and my age is ${age} years old.`); // Template literals

const gameName = new String('Call-of-Duty'); // String object

console.log(gameName[0]); // Accessing first character of string object
console.log(gameName.__proto__); // Accessing prototype of string object

// console.log(gameName.length);
// console.log(gameName.toUpperCase); // Converting string object to uppercase

// console.log(gameName.charAt(2)); // Accessing character at index 2
// console.log(gameName.index('o'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const newStringOne = "  birat   "
console.log(newStringOne);
console.log(newStringOne.trim()); // Removing whitespace from both ends

const url = "https://birat.com/birat%20dey"
console.log(url.replace('20%', '-'))
console.log(url.includes('porbo'))
console.log(gameName.split('-'));
