// Array Sorting in JavaScript



// String array sorting


const person = ['nokib', 'sakib', 'akib', 'zakib', 'sakib'];

const sortedPerson = person.sort();
console.log("Sorted Person:", sortedPerson);

// -------------------------------
// Number array sorting


const numbers = [45, 8, 40, 1, 23, 78, 96, 10, 233, 56, 14];

// Wrong way for numbers
// JavaScript compares numbers as strings (ASCII order)
const wrongSortedNumbers = numbers.sort();
console.log("Wrong Sorted (ASCII issue):", wrongSortedNumbers);


// Correct numeric sorting (ascending)


const ascSortedNumbers = numbers.sort(function (a, b) {  return a - b;});
console.log("Ascending Sort:", ascSortedNumbers);

// -------------------------------
// Correct numeric sorting (descending)
// -------------------------------

const dscSortedNumbers = numbers.sort(function (a, b) {
    return b - a;
});
console.log("Descending Sort:", dscSortedNumbers);

// ===================================================
// IMPORTANT: sort() mutates the original array


const marks = [50, 10, 40, 20];

const sortedMarks = marks.sort(function (a, b) {
    return a - b;
});

console.log("Original Marks Array:", marks);
console.log("Sorted Marks Array:", sortedMarks);


// SOLUTION: Create a copy before sorting


const prices = [300, 100, 500, 200];

// Copy the array using spread operator, then sort
const sortedPrices = [...prices].sort(function (a, b) {
    return a - b;
});

console.log("Original Prices Array:", prices);
console.log("Sorted Prices (Copy):", sortedPrices);
