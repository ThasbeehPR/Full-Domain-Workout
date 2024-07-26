//SET
// mySet.add(value) is used to add values to the Set.
// mySet.has(value) checks if a specific value exists in the Set.
// mySet.delete(value) removes a value from the Set.
// for...of loop is used to iterate over the values in the Set.

let myset = new Set()

myset.add(1)
myset.add(2)
myset.add(3)
myset.add(4)
myset.add(5)
myset.add(6)
myset.delete(5)
myset.has(3)    //if we console this we get //true
console.log(myset);

//it print only unique element  
let myyset=new Set([1,2,3,2,4,5,1])
console.log(myyset);