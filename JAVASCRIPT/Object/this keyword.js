//normal funtion 'this' refer object
let person = {
    name:'Thasbii',
    age:22,
    greet(){
        console.log('Heyy my name is '+this.name);
    }
}

person.greet()

//Arrow function do not have their own 'this' context. Instead, they inherit this from the enclosing scope
let person2 = {
    name:'Jack',
    age:23,
    greeting :    
               function(){
                  get=()=> {
                    console.log('Heyy my name is '+this.name);
                }
                get()
                }
            }

person2.greeting()