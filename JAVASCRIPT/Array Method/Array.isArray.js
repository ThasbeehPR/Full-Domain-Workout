// Array.isArray() -used to determine whether a given value is an array. This method returns true if the value is an array, and false otherwise.

const x = [1,2,3,4,5]
y=Array.isArray(x)
console.log(y);

//Examples
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray('hello'));   // Output: false
console.log(Array.isArray({a: 1}));    // Output: false
console.log(Array.isArray(123));       // Output: false
console.log(Array.isArray(undefined)); // Output: false
console.log(Array.isArray(null));      // Output: false
console.log(Array.isArray([1, 2, [3, 4]])); // Output: true
