//sum 
arr=[1,2,5,7,8,9]

const arr1= arr.reduce((acc,val)=>{
    if(val>2){
        acc+=val
    }return acc
},0)

console.log(arr1)


