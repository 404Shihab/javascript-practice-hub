// Price of orange as a number
var orangePrice = 20;

// Price of apple converted from string to integer
var applePrice = parseInt("20");

// Adding both prices
var totalPrice = orangePrice + applePrice;

// Output total price
console.log(totalPrice); // 40

// Check the data type of totalPrice
console.log(typeof(totalPrice)); // number

// -----------------------------

// A normal number
var myNum = 544;

// parseInt fails because the string does not start with a number
var hmm = parseInt(" some text ");
console.log(hmm); // NaN (Not a Number)

// parseInt removes the decimal part and keeps only the integer
var hmm = parseInt(7.54); // becomes 7

// Adding integer with parsed value
console.log(myNum + hmm); // 544 + 7 = 551

// -----------------------------

// Floating point numbers
var a = 0.1;
var b = 0.2;

// Adding floating point values
var total = a + b;

// JavaScript floating-point precision issue
// console.log(total);  // 0.30000000000000004

// toFixed formats the number to 1 decimal place (returns a string)
console.log(total.toFixed(1)); // "0.3"
