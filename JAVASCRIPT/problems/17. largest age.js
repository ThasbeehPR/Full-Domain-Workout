//print largest age object
let arr = [
    {name:"Thasbii",age:22},
    {name:"Kiran",age:27},
    {name:"Jomi",age:25},
    {name:"Ansar",age:24},
    {name:"Anand",age:33},

]

//largest age
let largest = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > largest) {
        largest = arr[i].age;
    }
}
console.log(largest);

//largest age Object
let largestObject = ''
for(let i=0; i<arr.length; i++){
    if(largestObject==='' || arr[i].age>largestObject.age){
        largestObject = arr[i]
    } 
}
console.log(largestObject);


