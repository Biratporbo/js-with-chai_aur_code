// const tinderUser = new Object() //Single term object
const tinderUser = {} // non-single term object

tinderUser.id = "125ab"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "rahul@gmail.com",
    fullname : {
        userfullName : {
            firstname : "birat",
            lastname : "dey"
        }
    }
}
// console.log(regularUser.fullname.userfullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "bi@gmail.com"
    },
    {
        id: 2,
        email: "bi@gmail.com"
    },
    {
        id: 3,
        email: "bi@gmail.com"
    },
    {
        id: 4,
        email: "bi@gmail.com"
    }
]

users[1].email
//console.log(tinderUser);
//
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.keys(tinderUser));
//
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//[ Part- 2 ] -----------------------------------------------------------

const course = {
    coursename : "javascript",
    price : "999" ,
    courseInstructor : "birat"
}

course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

//or using this similar

const {courseInstructor : instructor} = course
console.log(instructor);