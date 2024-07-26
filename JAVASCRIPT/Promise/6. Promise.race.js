//Promice.race
//it will resolve the value who execute fast

let promise1 = new Promise((res,rej)=>{
    setTimeout(res,500,'one')
})

let promise2 = new Promise((res,rej)=>{
    setTimeout(res,100,'two')
})

Promise.race([promise1,promise2]).then((val)=>{
    console.log(val);
}).catch((error)=>[
    console.log('rejected',error)
])
//Promise any/race
// In scenarios where the fastest promise is a resolving promise, both Promise.any and Promise.race will produce similar outputs because both are effectively capturing the first promise to settle. However, their behavior diverges when the fastest promise is a rejecting promise or when handling multiple rejections

// Promise.any would continue to wait for the next resolved promise if the first settled promise is a rejection.
// Promise.race would immediately settle with the result of the first settled promise, whether it's a resolve or a reject