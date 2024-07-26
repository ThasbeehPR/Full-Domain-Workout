//prin unique string from an array

let str = ['malayalam','malayalam','hindi','tamil']

//checking all elements
let uni = new Set(str)

let un = Array.from(uni)

let result = un.forEach((val)=>{
    console.log(val);
})

console.log(un);

//checking 1st element malayalam
const letter =  str[0].split('')

let uniqueLetter = new Set(letter)

let arr = Array.from(uniqueLetter).join('')

console.log(arr);