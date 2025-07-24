// Primitive

// 7 types :- String, Number, boolean, null, undefined, symbol, BigInt

//Basics -
const score = 100; // number defdined
const scoreValue = 100.5; // number with decimal

const isLoggedIn = false; // boolean defined
const outsideTemp = null; // null defined
let useremail; // undefined variable


const id = Symbol('123') //symbol defined
const anothderId = Symbol('123')

console.log(id === anothderId); // false, because symbols are unique

const bigNumber = 34374346545352n // bigInt defined



// References (Non-primitive)

//Array, Objects, Functions

//Basics-
const heros = ['Thor', 'Ironman', 'Hulk']; // Array defined
let myObj = {
    name: "Birat", // Object defined
    age: 22,  // Object with key-value pairs
}

const myfunction = function () { // Function defined
    console.log("Hello World");
}

// console.log(typeof anothderId);


// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myLinkdinprofile = "Birat Dey"

let anotherprofile = myLinkdinprofile
anotherprofile = "Biratporbo"

console.log(myLinkdinprofile); // Birat Dey
console.log(anotherprofile); // Biratporbo;


let user ={
    email: "user@google.com",
    upi: "user@upi",
}

let user2 = user

user2.email = "userbirat@google.com"
console.log(user.email);
console.log(user2.email);
