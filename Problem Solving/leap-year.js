// -------------Leap Year Checker--------------


/*
Leap Year Logic:

1. A year is a Leap Year if it is divisible by 4.
2. But if the year is divisible by 100, it is NOT a Leap Year.
3. However, if the year is divisible by 400, it IS a Leap Year.

In short:
- Divisible by 4  - Leap Year
- Divisible by 100 - Not a Leap Year
- Divisible by 400 - Leap Year
*/

function isLeapYear(year) 
{
    return (year % 4 === 0 && year % 100 !== 0) || (year %400 ===0);
}

// Test cases
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2010)); // false
