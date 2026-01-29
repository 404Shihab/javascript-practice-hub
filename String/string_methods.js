const school = 'Gazipur Khan Govt. Model School and College';
console.log(school.toUpperCase());
console.log(school.toLowerCase());


console.log("--------------------------------");

//The trim() method removes whitespace from both sides of a string

const something = ' hello';
console.log(something.trim());


// slice() method

// slice(startIndex, endIndex)
// It extracts a part of a string and returns a new string

let text = "JavaScript";

// Extract from index 0 to 4 (4 not included)
let part = text.slice(0, 4);

console.log(part); // Java



// split() method

// split() converts a string into an array

let sentence = "I love JavaScript";

// Split the string by space
let words = sentence.split(" ");

console.log(words); // ["I", "love", "JavaScript"]




//  join() method

// join() converts an array into a string

let fruits = ["Apple", "Banana", "Mango"];

// Join array elements using comma
let result = fruits.join(", ");

console.log(result); // Apple, Banana, Mango




//  trim() method

// The trim() method removes whitespace from both sides of a string

const hello = " hello ";

// Remove extra spaces
console.log(hello.trim()); // hello




// Extra combined example

let data = "  HTML CSS JS  ";

// Step 1: remove extra spaces
let trimmedData = data.trim();

// Step 2: convert string to array
let techArray = trimmedData.split(" ");

console.log(techArray); // ["HTML", "CSS", "JS"]

// Step 3: join array into string again
let finalText = techArray.join(" | ");

console.log(finalText); // HTML | CSS | JS

//-*-*-*-*-*-**-*-*-*-**-*-*

// split() - string -> array

// join() - array -> string

// trim() - clean extra space
