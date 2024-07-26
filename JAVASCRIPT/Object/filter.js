const person = [
    
     {name: "Thasbeeh", age: 22},
     {name: "Kiran", age: 28},
     {name: "Jomi", age: 25},
     {name: "Anand", age: 33},
     {name: "Ansar", age: 24},

]
    

const age = person.filter((val)=>{
    return val.age>=25
})


console.log(age);



