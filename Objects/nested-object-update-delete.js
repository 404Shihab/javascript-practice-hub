// Nested Object, Array Update & Delete

const college = {
    name: 'XYZ',
    class: ['11', '12'], 
    events: ['science fair', '16th dec', 'pitha utshab'],

    unique: {
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
    }
};

// -------------------------------
// Accessing object & nested data

console.log(college);
console.log(college.unique.color);        // Access nested object
console.log(college.unique.result.gpa);   // Deep nested access

// Updating nested object property


college.unique.result.merit = 'top top most';
console.log(college.unique);

// Updating array value inside object


college.events[1] = 'bijoy dibosh';
console.log(college.events);

// Deleting a property from object

delete college.class;
console.log(college);
