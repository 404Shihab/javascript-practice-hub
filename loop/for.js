for (let i=1; i<=10; i++)
{
    console.log(i,"Bangladesh");
}

console.log("------------------------");

const cars = ['volvo','honda','toyota','bmw','ford'];
let len = cars.length;
for(let i=0; i<len; i++)
{
    console.log(cars[i]);
}

console.log("------------------------");

let sum=0;
for(let i=1; i<=100; i++)
{
    if(i%2!=0)
    {
        console.log(i);
        sum += i;
    }
}
console.log('sum',sum);