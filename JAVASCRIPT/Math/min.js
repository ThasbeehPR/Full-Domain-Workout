//min - find minimum
console.log(Math.min(1,2,3,4,5));


// in array use spread operator
// Math.min is a method of the Math object, not of an array instance.
// To use Math.min with an array, you need to pass the array elements as individual arguments.
// This can be achieved using the spread operator (...) to spread the array elements.
console.log(Math.min(...[11,22,33,44,54]));


arr=[66,77,87,99,100]
console.log(Math.min(...arr));

