function greet(country){
    console.log(`heyy...my name is ${this.name}, age is ${this.age}
        ${country}`
    );
}

const person={
    name:"Thasbeeh",
    age:22
}

//call
greet.call(person,'India')

//apply
greet.apply(person,['India'])

//bind  //it return new function
const bindMethod = greet.bind(person,'India')
bindMethod()