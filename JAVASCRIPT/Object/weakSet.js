// set can store any primitive type 
// But for weakset only object is stored
// because it sesigned to work with object references

const set = new WeakSet()

user = {name : "joe" , age:10}
user2 = {name : "jack" , age:20}

set.add(user)

console.log(set.has(user));



