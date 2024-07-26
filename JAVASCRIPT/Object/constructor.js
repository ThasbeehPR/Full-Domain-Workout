class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }

     print(){
        console.log(`My name is ${this.name} and i am ${this.age} years old`);
    }
}

const person1 = new Person("Thasbii",22)
person1.print()
