console.log(Math.max(1,2,3,4,5));


// in array use spread operator
// Math.max is a method of the Math object, not of an array instance.
// To use Math.max with an array, you need to pass the array elements as individual arguments.
// This can be achieved using the spread operator (...) to spread the array elements.
//example1
console.log(Math.max(...[11,22,33,44,55]));
//example 2
let arr=[66,77,88,999,100]
console.log(Math.max(...arr));