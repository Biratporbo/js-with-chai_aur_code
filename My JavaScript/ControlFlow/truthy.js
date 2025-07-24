// const userEmail = "bi@.ai"
// if(userEmail){                    //this is truthy value
//     console.log("Got User email");
// }else{
//     console.log("Don't have user email");
// }

//falsy values
//represent, false(value), 0, -0, BigInt => (0n), "", null, undefined, Nan (not a number)

//truthy values
//"0"(string under's 0), 'false'(under string(' ')), " ", [], {}, function(){}

const userEmail = [] //empty array but it denote's truth value
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

if(userEmail.length === 0){
    console.log("Array is empty"); //for checking empty array yes or no!
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){ //*
    console.log("Object is empty"); //*when object are array checking
}

//Nullish Coalescing Operator (??): null undefied

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//Terniary Operator
// condition ? true ? false
const iceTeaMrp = 100
// iceTeaMrp >= 80 ? 
//     console.log("less than 80"):        //<- true statement
//         console.log("more than 80");    //<- false statement

//or

iceTeaMrp <= 80 ? 
    console.log("less than 80"):           //<- true statement
        console.log("more than 80");       //<- false statement