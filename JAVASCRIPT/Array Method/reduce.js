arr=[1,2,3,4,5]

arr1=arr.reduce((total,value)=>{
   return total+=value
})


console.log(arr1);