const person = ['salam', 'kalam', 'rafik', 'barkat'];
console.log(person.includes('rafik'));
console.log(person.includes("kalam"));

if(person.includes('salam'))
{
    console.log("found");
}
else
{
    console.log('not found');
}
console.log("-----------------------------------");

//indexOf

console.log(person.indexOf("Salam")); //-1
console.log(person.indexOf('salam')); // 0

console.log("-----------------------------------");



//isArray

const hmm = ' kjf kdjf jkf';
const nums = [];

console.log(Array.isArray(person)); // true
console.log(Array.isArray(hmm)); // false
console.log(Array.isArray(nums)); //true
//-----------------------------------------
console.log(Array.isArray([])); //true
console.log(Array.isArray([45,87,56])); //true
console.log(Array.isArray('[]')); //false

// concat , slice , join



let firstName = "Shihab";
let lastName = "Bhuiyan";

// Use concat() to join strings
let fullName = firstName.concat(" ", lastName);


console.log("Full Name:", fullName);

// array concat


let numbers1 = [1, 2, 3];


let numbers2 = [4, 5, 6];

// Use concat() to merge two arrays
let mergedArray = numbers1.concat(numbers2);


console.log("Merged Array:", mergedArray);


// MULTIPLE ARRAY CONCAT EXAMPLE


// Declare another array
let numbers3 = [7, 8, 9];

// Merge multiple arrays at once
let allNumbers = numbers1.concat(numbers2, numbers3);

// Print the final array
console.log("All Numbers:", allNumbers);



// concat() does NOT change the original array
console.log("Original numbers1:", numbers1);



// Declare a greeting string
let greeting = "Hello";

// Concatenate multiple strings
let message = greeting.concat(", ", fullName, "!Welcome to JavaScript.");

console.log(message);
