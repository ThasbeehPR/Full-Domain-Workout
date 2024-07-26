//instance of - to check object belong to that class
class Gadget{
    constructor (name){
        this.name=name
    }
}

class Gadget2{
    constructor (name){
        this.name=name
    }
}

const product = new Gadget('Laptop')
const product1 = new Gadget2('Laptop')

// console.log(product.name);
console.log(product instanceof Gadget);
console.log(product1 instanceof Gadget);