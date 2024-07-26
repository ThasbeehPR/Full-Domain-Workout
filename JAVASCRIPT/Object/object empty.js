let person = {
    name:'Thasbii',
    age:22,
    greet(){
        console.log('Heyy my name is '+this.name);
    }
}

console.log( Object.values(person).length === 0 );


