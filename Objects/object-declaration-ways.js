
// Different Ways to Declare Objects
// 1. Object literal (MOST COMMON & RECOMMENDED)
const pen = {
    brand: 'Econo',
    price: 10,
    color: 'black'
};

console.log(pen);

// 2. Using Object constructor
const pencil = new Object();
pencil.brand = 'Matador';
pencil.price = 5;
pencil.color = 'red';

console.log(pencil);

// 3. Using Object.create()
const rubber = Object.create({});
rubber.brand = 'Apsara';
rubber.price = 3;
rubber.color = 'white';

console.log(rubber);