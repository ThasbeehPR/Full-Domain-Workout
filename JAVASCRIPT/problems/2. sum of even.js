//sum of even

let arr= [2,4,5,7,3,6]
let sum=0

//reduce
const result = arr.reduce((acc,val)=>{
    if(val%2==0){
       acc+=val
    }
    return acc
},0)
console.log(result);

//forEach
const result1 =  arr.forEach((val)=>{
    if(val%2==0){
        sum+=val
    }
}
)
console.log(sum);

