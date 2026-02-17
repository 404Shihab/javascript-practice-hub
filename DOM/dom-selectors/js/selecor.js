console.log('hmmm');
console.log('Hello from outside');
// console.log(document)
const student = {
    name:'Abul mia',
    age:45,
    study: function (subject){
        console.log('studying subject ',subject);
    }
}

//get elements by tag name

const liCollection = document.getElementsByTagName('li');
console.log(liCollection);

for (const li of liCollection) {
    console.log(li.innerText);
    
}

const headingCollection = document.getElementsByTagName('h1');
for (const h of headingCollection) {


    console.log(h.innerText);
}

const paraCollection = document.getElementsByTagName('p');
for (const p of paraCollection) {
    console.log(p.innerText);
    
}


//get element by ID

const foodTitle = document.getElementById('food-title');
console.log(foodTitle.innerText);

foodTitle.innerText = 'Foods i love';

const foodLiItem = document.getElementById('foodli');
console.log(foodLiItem.innerText);

foodLiItem.innerText = 'Biriyani';


//get elements by class name
const nameCollection = document.getElementsByClassName('name');
console.log(nameCollection);

for (const c of nameCollection) {
    console.log(c.innerText);    
}



// Important Notes About DOM Selectors


// getElementsByClassName() and getElementsByTagName()
// return an HTMLCollection (array-like object).
// If no matching elements are found,
// it returns an empty HTMLCollection (not null).

// Example:
const unknownClass = document.getElementsByClassName('does-not-exist');
console.log(unknownClass); // HTMLCollection []
console.log(unknownClass.length); // 0


// getElementById()
// returns a single element.
// If no element is found with that ID,
// it returns null.

const unknownId = document.getElementById('not-found');
console.log(unknownId); // null


// Important:
// Always check for null before using an element returned by getElementById()

if (unknownId !== null) {
    console.log(unknownId.innerText);
}


//query selector all
const classSelector = document.querySelectorAll('.food .name');
for (const food of classSelector) {
    console.log(food.innerText);
    
}

//query selector all
const classSelect = document.querySelector('.name-list .name');
console.log(classSelect.innerText);


// querySelectorAll --- returns all matching elements (NodeList)
// querySelector --- returns only the first matching element (Single Element)


//--------------------------------------------------------------
// getElementById - selects one element by ID (returns single element)

// getElementsByClassName - selects all elements by class (returns live HTMLCollection)

// getElementsByTagName - selects all elements by tag name (returns live HTMLCollection)

// querySelector - selects first matching element using CSS selector (returns single element)

// querySelectorAll - selects all matching elements using CSS selector (returns static NodeList)



