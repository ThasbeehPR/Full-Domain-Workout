//Generator Functions

function* numberGenerator(){
    yield 1,
    yield 2,
    yield 3
}

const gen = numberGenerator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



// special type of function in JavaScript that can pause its execution and resume later, 
// allowing you to generate a sequence of values over time, rather than computing them all at once and sending them back in an array.
// Generator functions are defined using the function* syntax and use the yield keyword to produce a sequence of values.

