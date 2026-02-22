// DOM Events Practice



// ---------------------------------------
// Option 1: Using named function
// This function changes background color to yellow
// ---------------------------------------
function makeYellow(){
    document.body.style.backgroundColor='yellow';
}


// Another named function for red color
function makeRed(){
    document.body.style.backgroundColor='red';
}


// ---------------------------------------
// Option 2: Assigning anonymous function
// directly to the onclick property
// ---------------------------------------
const makeBlue = document.getElementById('make-blue');

makeBlue.onclick = function () {
    document.body.style.backgroundColor='blue';
};


// ---------------------------------------
// Option 3: Assigning named function
// to onclick property
// ---------------------------------------
const btnMakePurple = document.getElementById('btn-make-purple');

// Assigning function reference (NOT calling it)
btnMakePurple.onclick = makePurple;

// This function changes background to purple
function makePurple (){
    document.body.style.backgroundColor = 'purple';
}


// =======================================
// Revision Notes
// =======================================

// onclick → Handles click event
// element.onclick = function → Direct event assignment
// element.onclick = functionName → Assign function reference
// document.body.style → Dynamically changes page styling

// Important:
// makePurple   → function reference
// makePurple() → function execution