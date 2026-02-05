// Convert Inches to Feet and Inches

function inchToFeet(inch) {
    const feet = Math.floor(inch / 12);     // Total feet
    const remainingInch = inch % 12;        // Remaining inches

    return feet + " ft " + remainingInch + " inch";
}

const result = inchToFeet(75);
console.log(result);
