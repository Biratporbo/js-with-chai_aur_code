function sayMyName(){
    console.log("B");
    console.log("i");
    console.log("r");
    console.log("a");
    console.log("t");
}

// sayMyName() => Function calling

// function addTwoNumber(number1, number2){
    // console.log(number1 + number2)
// }
// addTwoNumber(3, 4)

function addTwoNumber(num1, num2){
    // console.log(num1 + num2)
    // return result
    return num1 + num2
}
const result = addTwoNumber(3, 5)
// console.log("Result: ", result);

// function loginUserMessage(username){
    // return `${username} just logged in`
// }
// console.log(loginUserMessage("birat"));
// console.log(loginUserMessage);

// function loginUserMessage(username) {
    // if(username === undefined){
        // console.log("Please enter a username");
        // return
    // }
    // return `${username} just logged in`
// }
// console.log(loginUserMessage("birat"));

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("birat"));

//[Part - 2] ---------------------------------------------------------

function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username : 'birat',
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject( {
    username : "sam", //that creating existing function technique
    price : 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 500, 100, 600, 1000])); //in print returnSecondValue creating existing array

