//print name of object

let arr = [
    {name:"Thasbii",age:23},
    {name:"Muhsin",age:27},
    {name:"Manjima",age:19},
    {name:"Sheheer",age:26},
    {name:"Sowravu",age:24},
    {name:"Revathi",age:25},
    {name:"Shyam Shaji",age:24},
    {name:"Veena",age:23},
    {name:"Alan",age:22},
]

const arr1 = arr.map((val)=>{
              return val.name
             })
             .join()

console.log(arr1);