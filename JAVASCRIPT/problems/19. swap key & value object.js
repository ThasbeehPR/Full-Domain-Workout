//swap key and value in an object
let obj = {
    a:1,
    b:2,
    c:3
};                      


let swap={}
for( let key in obj){
    swap [obj[key]] = key
}
// console.log(swap);

const arr = Object.entries(obj)
const arrSwap = arr.map(([key,val])=>{
    [key,val]=[val,key]
})
console.log(swap);





