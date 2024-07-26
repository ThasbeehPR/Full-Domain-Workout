//create a new array with square of each number with different way
//find even number in different way

let arr=[1,2,3,4,5]

arr1 = arr.map((val)=>{
   return val*val
})
.filter((val)=>{
   return val%2==0
})

console.log(arr1);