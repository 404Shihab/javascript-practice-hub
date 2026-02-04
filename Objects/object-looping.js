// Looping Through Objects in JavaScript

const mobile = {
    brand: 'Apple',
    model: 'iPhone 17 Pro Max',
    color: 'silver',
    price: 100
};


// for...in loop (used directly on objects)


for (const property in mobile) 
{
    console.log(property);           // Prints property name
    console.log(mobile[property]);   // Prints property value
}

// ---------------------------------------
// Object.keys() + for...of loop

const keys = Object.keys(mobile);
console.log("Keys:", keys);

for (const key of keys) {
    console.log(key, ":", mobile[key]);
}