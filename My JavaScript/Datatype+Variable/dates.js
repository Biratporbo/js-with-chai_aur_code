//Dates

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); //It will return object(type)

//Format
// let myCreatedDate = new Date(2025, 6, 6)
// console.log(myCreatedDate.toDateString());

//Format 2
// let myCreatedDate = new Date(2025, 6, 6, 12, 30, 0)
// console.log(myCreatedDate.toLocaleString());

//Format 3
let myCreatedDate = new Date("07-06-2025")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now() / 1000); //In Seconds
console.log(Math.floor(Date.now() / 1000)); //It also returns in seconds

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth());

`${newDate.getDay()}` // String Interpolation   

newDate.toLocaleString('deefault', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
})