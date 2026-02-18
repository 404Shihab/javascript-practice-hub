// ========================================
// DOM Manipulation Practice
// ========================================

// ----------------------------------------
// Selecting element by ID
// ----------------------------------------

// const id = document.getElementById('players-container');
// console.log(id);

// Get full HTML content inside an element
// const something = document.getElementById('players-container').innerHTML;
// console.log(something);

// Replace text content inside an element
// document.getElementById('players-container').innerText = 'tom';

// Replace entire HTML structure inside an element
// document.getElementById('players-container').innerHTML='<ul> <li>Anyone</li> </ul>';
// document.getElementById('players-container').innerHTML='<p>Shihab Uddin Bhuiyan. <h1>Haha</h1></p>';


// ----------------------------------------
// Selecting multiple elements
// ----------------------------------------

// const sectionsName = document.getElementsByTagName('section');
// console.log(sectionsName);

// querySelectorAll returns a NodeList
// const sectionsName = document.querySelectorAll('section');
// for (const sec of sectionsName) {
//     console.log(sec);
//     sec.style.backgroundColor='darkblue';
//     sec.style.color='white';
//     sec.style.border='2px solid skyblue'
//     sec.style.marginBottom='20px';
// }


// ----------------------------------------
// Adding class dynamically to multiple elements
// ----------------------------------------

const sections = document.querySelectorAll('section');

// Loop through each section and add a CSS class
for (const section of sections) {

    section.classList.add('section-card')
    
}


// Revision Notes


// innerText - returns only visible text content
// innerHTML - returns full HTML including tags

// querySelectorAll() - returns NodeList
// NodeList can be looped using for...of

// classList.add() - adds a CSS class
// classList.remove() - removes a CSS class
// classList.toggle() - adds if not present, removes if present

// DOM manipulation means:
// - Changing content
// - Changing structure
// - Adding or removing classes
// - Updating styles dynamically
