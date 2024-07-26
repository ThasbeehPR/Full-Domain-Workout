//factory function   - fn that return object

function factory(name,place){
    return{
        name,
        place,
        great(){
            return `My name is ${this.name} I'm from ${this.place}`
        }
    }
}

const user=factory('Akhildas','Kochi')
console.log(user.great());