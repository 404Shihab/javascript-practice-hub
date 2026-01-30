const sentence = 'The quick brown fox jumps over the lazy dog while eating a slice of pizza';

let reverse ='';
for(const letter of sentence)
{
    reverse = letter+reverse;
}

console.log(reverse);

//using for loop

let rev ='';

for(let i=0; i<sentence.length; i++)
{
    const letter =sentence[i];
    rev=letter+rev;
}
console.log(rev);

//shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);
