//add ages

const arr = [
    {
    name:"Thasbi",
    age:22
   },
   {
    name:"Robin",
    age:25
   },
   {
    name:"Manhas",
    age:26
   },
   {
    name:"Hashim",
    age:24
    },
    {
     name:"Athul",
     age:23
    }

]

const result = arr.reduce((sum,val)=>{
   return sum+=val.age
},0)

console.log(result);



