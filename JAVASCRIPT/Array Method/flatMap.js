// flatMap method in JavaScript combines the functionality of the map and flat methods into a single method
arr=[1,2,3,[4,5,6]]
arr1=arr.flatMap((value)=>value)
console.log(arr1);


//instrings
// Use flatMap to split each string into an array of characters
arr=["Hello","World"]
arr1=arr.flatMap((value)=>value.split(''))
console.log(arr1);

//normal map
arr=["Hello","World"]
arr1=arr.map((value)=>value.split(''))
console.log(arr1);

