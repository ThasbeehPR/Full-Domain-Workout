const myPromise = new Promise((res,rej)=>{
    const sucess = true
    if(sucess){
        res ('Operation success')
    }else{
        rej('operation failed')
    }
})

myPromise
.then((message)=>{
console.log(message);
})
.catch((error)=>{
    console.log(error);
})