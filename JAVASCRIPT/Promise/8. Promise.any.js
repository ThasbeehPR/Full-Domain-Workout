//promise.any
// waits for any of the Promises to be fulfilled. If none of the Promises are fulfilled (all are rejected), it rejects with an AggregateError containing all the rejection reasons.

let promise1 = new Promise((res,rej)=>{
    setTimeout(res,1000,'p1 resovlved after 2sec')
})
let promise2 = Promise.reject('p2 rejected')
let promise3 = new Promise((res,rej)=>{
    setTimeout(res,200,'p3 resovlved after 2sec')
})

Promise.any([promise1,promise2,promise3])
.then((val)=>{
    console.log(val);
}).catch((error)=>{
    console.error(error.error);
})
//Promise any/race
// In scenarios where the fastest promise is a resolving promise, both Promise.any and Promise.race will produce similar outputs because both are effectively capturing the first promise to settle. However, their behavior diverges when the fastest promise is a rejecting promise or when handling multiple rejections

// Promise.any would continue to wait for the next resolved promise if the first settled promise is a rejection.
//only fastest successful resolve will print

// Promise.race would immediately settle with the result of the first settled promise, whether it's a resolve or a reject
//res or reject it will print the fastest one


//promice any  - only fastest successful resolve will print (if rej was fastest it will not print), if all are error all error shoew in an array (aggregate Error)