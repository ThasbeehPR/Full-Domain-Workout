// find object that have more age than 25
let arr = [
    
    {name:"Thasbii",age:22},
    {name:"Rizwana",age:21},
    {name:"Shahnas",age:24},
    {name:"Siraj",age:23},
    {name:"Michelle",age:24},
    {name:"Anees",age:25},
    {name:"Pavan",age:26},
    {name:"Ganeesh",age:28},
]

const result = arr.filter((val)=>{
   return val.age>25
})

console.log(result);