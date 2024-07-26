//swap values without using temperary variable

let obj = {
    a: 1,
    b: 2,
    c: 3
};      //';' want to work method 1

//method 1
[obj.a,obj.b]=[obj.b,obj.a]
console.log(obj);


//with temporary
let temp = obj.a
obj.a=obj.c
obj.c=temp
console.log(obj);



