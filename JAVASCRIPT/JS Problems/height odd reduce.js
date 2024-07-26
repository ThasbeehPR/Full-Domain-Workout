//heighest odd number using reduce

arr = [1,2,2,3,56,7,3,19,5,4]

const result = arr.filter((val)=>{
    return val%2==0
}).reduce((acc,val)=>{
    if(val>acc.max){
        acc.max=val
    }
    return acc

},{max:-Infinity})

console.log(result);