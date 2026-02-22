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


//option:4 eventEventListener

document.getElementById('btn-make-green').addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
})

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

// =======================================
// Revision Notes (Event Handling Methods) (From gpt)
// =======================================

// 1️⃣ Inline HTML event (onclick="")
//    ❌ Not recommended for real projects
//    ❌ Mixes HTML and JavaScript
//    ✔ Okay for very small demos

// 2️⃣ element.onclick = function()
//    ✔ Simple and easy
//    ❌ Only one click handler can exist at a time
//    (New assignment will overwrite previous one)

// 3️⃣ element.onclick = functionName
//    ✔ Cleaner than inline
//    ❌ Still limited to one handler

// 4️⃣ addEventListener('click', function)
//    ✅ BEST and most professional method
//    ✅ Allows multiple event listeners on same element
//    ✅ Cleaner and scalable
//    ✅ Most commonly used in real-world projects

// ⭐ Recommended:
// Always prefer addEventListener() in modern JavaScript.