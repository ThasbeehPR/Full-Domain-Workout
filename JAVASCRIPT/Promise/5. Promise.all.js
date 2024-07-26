//promise all
//it will resolve only all are resolved if any one of them goes rejected then it will become rejected

let promise1 = Promise.resolve(3)
let promise2 = 42
let promise3 =new Promise((res,rej)=>{
    setTimeout(()=>{
        res('hooo')
    },2000)
})

Promise.all([promise1,promise2,promise3])
.then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})