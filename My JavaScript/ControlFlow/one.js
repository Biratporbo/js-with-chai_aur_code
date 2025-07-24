//if

const isUserloggedIn = true
const temperature = 41

if(temperature < 40){
    console.log("less than 40");
}else{
    console.log("temperature is greater than 40");
}
console.log("Executed")

// <, >, <=, >=, ==, !=, ===, !==
const score = 200
if(score > 100){                           //Block scope related
    const power = "fly"                       //scope counted!
    console.log(`User power: ${power}`); 
}
// console.log(`User power: ${power}`);

const bal = 1000 //short hand notation
// if(bal > 500) console.log("test"), console.log("test2"); //emplesit scope
if(bal < 500){
    console.log("less than 500");
}else if(bal < 750){
    console.log("less than 750");
}else if(bal < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}