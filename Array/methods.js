const person = ['salam', 'kalam', 'rafik', 'barkat'];
console.log(person.includes('rafik'));
console.log(person.includes("kalam"));

if(person.includes('salam'))
{
    console.log("found");
}
else
{
    console.log('not found');
}
console.log("-----------------------------------");

//indexOf

console.log(person.indexOf("Salam")); //-1
console.log(person.indexOf('salam')); // 0

console.log("-----------------------------------");



//isArray

const hmm = ' kjf kdjf jkf';
const nums = [];

console.log(Array.isArray(person)); // true
console.log(Array.isArray(hmm)); // false
console.log(Array.isArray(nums)); //true
//-----------------------------------------
console.log(Array.isArray([])); //true
console.log(Array.isArray([45,87,56])); //true
console.log(Array.isArray('[]')); //false

// concat , slice , join