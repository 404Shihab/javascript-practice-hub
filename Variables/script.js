// ===== using var =====
var varX = 14756;
var varY = -96;
var varZ = varX + varY;

document.getElementById("var").innerHTML =
    "Using var → The value of z is: " + varZ;

// ===== using let =====
let letA = 100;
let letB = 50;
let letC = letA + letB;

document.getElementById("let").innerHTML =
    "Using let → The value of c is: " + letC;

// 1️ Block Scope
{
    let blockX = 10;
    console.log("Inside block (blockX):", blockX); // works
}
// console.log(blockX);  error (block scoped)

// 2️ Cannot be Redeclared
let redeclareY = 5;
// let redeclareY = 20;  error (same scope)

// 3️ Must be declared before use
// console.log(beforeZ);  ReferenceError
let beforeZ = 30;

console.log("redeclareY:", redeclareY);
console.log("beforeZ:", beforeZ);
