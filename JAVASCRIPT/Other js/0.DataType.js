//Primitive
let num = 42; // Number
let str = "hello"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("unique"); // Symbol
let bigInt = 1234567890123456789012345678901234567890n; // BigInt


// Non-primitive types
//************************************************************************************************** */
let obj = { name: "John", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let date = new Date(); // Date
let regex = /ab+c/; // RegExp
// Functions are objects
function greet() {
    console.log("Hello, world!");
}

greet(); // Invoke the function
// Map and Set
let map = new Map();
map.set("key1", "value1");
let set = new Set();
set.add(1);
set.add(2);
// Promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result));