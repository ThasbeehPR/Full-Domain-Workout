// FLAT     //make all nested array to one array

arr=[1,2,3,4,5,[6,7],8,[9,[10]]]

console.log(arr.flat());    
console.log(arr.flat(Infinity));        //if we didn't pass infinity the flat only get 1st nested array other will not make in one array 