const coding = ["js","ruby","python","java","cpp"]
// coding.forEach(function (code){
//     console.log(code);  //forEach using for => callback function
// })

// coding.forEach((code) =>{
//     console.log(code);
// })

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",         //this is object declare
        languageName: "js"
    },
    {
        languageName: "java",               //this is also object declaration
        languageName: "java"
    },
    {
        languageName: "python",         //this is object declarations too
        languageName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName); //with arrow function method to callback response
})