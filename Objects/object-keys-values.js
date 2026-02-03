// Object.keys() and Object.values()

const person = {
    name: 'Java Khan',
    age: 45,
    address: 'Akash Patal',
    'fav color': 'color blind' // Property with space
};


// Get all property names (keys)


const keys = Object.keys(person);
console.log("Object Keys:", keys);

// -------------------------------
// Get all property values


const values = Object.values(person);
console.log("Object Values:", values);
