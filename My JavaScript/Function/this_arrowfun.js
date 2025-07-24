const user = {
    username : "birat",
    price : 599,
    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

//browser object called window object

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
// console.log(this);

// function chai(){                 //This is not declare function
//     let username = "birat"
//     console.log(this.username);
// }
// chai()

const addTwo = (num1, num2) => {    //This call arrow function
    return num1 + num2              // and using return!
}
console.log(addTwo(9,8));

const addTwo_2 = (num1 , num2) => num1 + num2
console.log(addTwo_2(9,8))        //emplesit return

const addTwo_3 = (num1, num2) => (num1 + num2)
console.log(addTwo_3(9,8)) //not using return

const addTwo_4 = (num1, num2) => ({username: "birat"})
console.log(addTwo_4(9,7));

const myArrayEach = [2, 5, 3, 7, 8]
console.log(myArrayEach);
