//create new object with value doubled

const obj = {a:1,b:2,c:3}

obj1={...obj}

for(let x in obj1){

    // console.log(x);          //key
    // console.log(obj1[x]);    //value

    obj1[x]*=2

    
}

console.log(obj1);