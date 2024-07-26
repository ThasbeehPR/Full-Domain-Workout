//filter number from  mixed array

arr=[0,'a',1,'b',2,'c',4,'d',3]

const result =  arr.filter((val)=>{
  return typeof val==='number'
})

console.log(result);