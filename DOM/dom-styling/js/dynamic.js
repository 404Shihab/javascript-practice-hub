// Select the unordered list using its ID
const foodList = document.getElementById('foods');

// Print all text inside the ul element
console.log(foodList.innerText);

// Apply dynamic inline styles using JavaScript
foodList.style.color='red';
foodList.style.backgroundColor='black';
foodList.style.border='2px solid red';
foodList.style.borderRadius='10px';


// Select the heading element by ID
const demoList = document.getElementById('demo');

// Add multiple CSS classes dynamically
demoList.classList.add('bg');
demoList.classList.add('thin');
demoList.classList.add('border');

// Remove a specific class
demoList.classList.remove('bg');

// Access the classList property (returns DOMTokenList)
demoList.classList;

// Get the value of a specific attribute
demoList.getAttribute('id');
