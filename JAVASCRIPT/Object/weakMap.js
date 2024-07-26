// WeakMap is a collection of key-value pairs 
// where the keys must be objects and the values can be arbitrary values
// garbage collector removes the key pointer from weakmap
// and also remove key from the memory

const map = new WeakMap()

user1={name:"Joe",age:24}
user2={name:"Jack",age:28}

map.set(user1,'this is user1')
map.set(user2,'this is user2')

console.log(map.get(user1));

user1=null  //when it become null it gone because it not store in garbage that why it give result undefinred
console.log(map.get(user1));

