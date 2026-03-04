console.log('File Connected');

const person = {
    name:'kodom ali',
    age:500,
    isMarried: false,
    friends:['alim','jalim','malim','nalim'],
    isRich: false
}

console.log(person);
//JSON -> JS Object with notation 
// JSON.stringify

const personJSON = JSON.stringify(person);

console.log(personJSON , typeof(personJSON));


const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);