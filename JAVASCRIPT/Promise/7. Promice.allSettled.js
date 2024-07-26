//Pomise.allSettled
//The returned Promise always resolves with an array of objects that each describe the outcome of each Promise.

let promise1 = Promise.resolve('Promise1 resolved')
let promise2 = Promise.reject('Promise2 rejected')
let promise3 = new Promise((res,rej)=>{
    setTimeout(res,1000,'promise resolved after 1 sec')
})


Promise.allSettled([promise1,promise2,promise3])
.then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})
