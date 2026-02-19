// console.log('diffs');

// create element and set innerText or innerHTML
const newCountry = document.createElement('li');
newCountry.innerText='Bongoboltu desh';

// find the parent where you will add the chid
const countryList = document.getElementById('country-list');

// append the child to the parent
countryList.appendChild(newCountry);