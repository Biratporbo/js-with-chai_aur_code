//for
for (let i = 0; i <= 10; i++) {
    const element = i;              //basic code from for iteration
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best no.");
    }
    // console.log(element);
}

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        // console.log(i + ' * ' + j + ' = ' + i * j);
    }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++){
    const element = myArray[i]; //Array using loop under block scope
    // console.log(element);

}

//break & continue
for (let index = 0; index <= 10; index++){
    if(index == 5){
        console.log(`Dtected 5`);  //break Statement
        break;
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 0; index <= 10; index++){
    if(index == 5){
        console.log(`Dtected 5`);  //continue Statement
        continue;
    }
    console.log(`Value of i is ${index}`);
}
