// "of" is associated with values.
// "in" is associated with keys.
const object = [{a:20},{b:10}]
let sum=0

for(let value of object){
   for(let key in value){
    sum+=value[key]
   }
}
console.log(sum);

//for subtraction
//sub=0
// sub=value[key]-sub

//for mul
//mul=1
// mul*=value[key]

//for div
//div=1
//sum/=value[key]





