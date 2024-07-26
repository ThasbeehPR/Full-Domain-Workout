//CURRING

//normal function
function add (a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}
console.log( add(1)(2)(3)  ); 


//arrow function
const add2 = a=>b=>c=>a+b+c
console.log(add2 (1)(2)(3));