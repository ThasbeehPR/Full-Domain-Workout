//constructor
function person(name,age){
    this.name=name;
    this.age=age
    this.display=function(){
        console.log(`name is : ${name} , Age is ${age}`);
    }
}

const p1=new person("Thasbii",23)   //new imp
const p2 =new person("Richu",22)

p1.display()
p2.display()