// arrays

const myArr = [1, 2, 3, 4, 5]
// console.log(myArr);

const myHeroes = ["Ironman", "Spider"]
// console.log(myHeroes);

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2);

// console.log(myArr[1]);
// console.log(myArr2[2]);

//Methods of Array

myArr.push(6) // Adds an element at the end
console.log(myArr);

myArr.push(7)
console.log(myArr);

myArr.pop() // Removes the last element
console.log(myArr);

myArr.unshift(6) // Adds an element at the beginning
console.log(myArr);

myArr.shift() // Removes the first element
console.log(myArr);

console.log(myArr.includes(9)); // searching for an elements
console.log(myArr.indexOf(3)); // returs the locates of variable

const newArr = myArr.join
console.log(typeof newArr); // It will return a string and show the object

//Slice and Splice

console.log("A ", myArr);
const myn1 = myArr.slice(0, 2) // It will return a new array from index 1 to 2`
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(0, 3) // It will remove the elements from index 1 to 2 and return the removed elements;
console.log(myn2);

console.log("C ", myArr);
const myn3 = myArr.splice(0, 2, 1, 2, 3)
console.log(myn3);
    