// Object Access & Update Techniques

const car = {
    brand: 'Honda',
    model: 'Civic',
    price: 450,
    color: 'white',
    'car type': 'Sedan',     // Property with space
    'seat number': ['first', 'second', 'third', 'fourth']
};


// Updating object properties


car.price = 500;                 // Update using dot notation
car['car type'] = 'SUV';         // Update using bracket notation
car.color = 'black';

console.log(car);


// Dot notation

console.log(car.color);
console.log(car.price);

const carColor = car.color;
console.log(carColor);


// Bracket notation

console.log(car['color']);

const carBrand = car['brand'];
console.log(carBrand);

console.log(car['car type']);    // Must use bracket notation

// console.log(car.'car type');  //  Syntax Error


// Dynamic property access

const keyName = 'brand';
console.log(car[keyName]);

const colorName = 'color';
car[colorName] = 'Yellow';

console.log(car);