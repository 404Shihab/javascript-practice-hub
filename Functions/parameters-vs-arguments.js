// Parameters vs Arguments in JavaScript

// Parameters are variables listed in the function definition
function greet(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}

// Arguments are the actual values passed to the function
greet("Java Khan", 25);
greet("Sakib", 30);


// Example with return value


function multiply(a,b) { // a and b are parameters
    return a*b;
}

const result = multiply(5, 4); // 5 and 4 are arguments
console.log("Multiply Result:", result);


// Function with single parameter


function showMessage(message) 
{
    console.log(message);
}

showMessage("Learning JavaScript Functions");
