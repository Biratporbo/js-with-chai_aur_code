//singleton
//objects literals
// Object.create -> // constructor method

const mySym = Symbol("key1")
const JsUser = {
    name : "Birat",
    "fullnamer" : "Birat Dey",
    [mySym] : "mykey1",
    mySym : "mykey1",
    age : 22,
    email : "birat@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(JsUser[mySym])

JsUser.email = "birat@123.com"

// Object.freeze(JsUser)

JsUser.email = "biratdey@2151.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// // ----------------------object de structure and JSON API intro

// const course = {
//     coursename : "javascript",
//     price : "599",
//     courseInstructor : "birat"
// }

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);
