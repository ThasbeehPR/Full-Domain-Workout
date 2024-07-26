let person = {
    name:'Thasbii',
    age:22,
    greet(){
        console.log('Heyy my name is '+this.name);
    }
}

//Object.keys() - Returns an array of a given object's property names
let keys = Object.keys(person)
console.log(keys);


//Object.values() - Returns an array of a given object's property values
let values = Object.values(person)
console.log(values);


//Object.entries() - Returns an array of a given object's [key, value] pairs.
let entries = Object.entries(person)
console.log(entries);


//Object.assign() 
let additionalInfo = {job:'developer'}
let updatedPerson = Object.assign(person,additionalInfo)
console.log(updatedPerson);

Object.assign(person,{salary:'50000'})
console.log(person);


//Object.freeze() - Freezes an object, making it immutable

Object.freeze(person)
person.age=20
console.log(person.age);

//Object.seal() - we can update but not insert or delete
 
Object.seal(person)
person.age='male'
console.log(person);