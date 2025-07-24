const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

marvel_heros.push(dc_heros) // Adds dc_heros as a single element
console.log(marvel_heros);
console.log(marvel_heros[3][1]); // Accessing an element from dc_heros array inside marvel_heros;

const allHeros = marvel_heros.concat(dc_heros) // Merging two arrays
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Merging two arrays using spread operator
console.log(all_new_heros);

const ano_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_ano_array = ano_array.flat(Infinity) // Flattening the array to remove nested arrays
console.log(real_ano_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Birat")); // Checking if the variable is an array, it will return false
console.log(Array.from("Birat")); // Converting a string to an array, it will return ['B', 'i', 'r', 'a', 't']
console.log(Array.from({name: "Birat"})); //Interesting Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Creating an array from variables, it will return [100, 200, 300]