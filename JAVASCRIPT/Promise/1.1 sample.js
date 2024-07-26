const myPromise = new Promise((res,rej)=>{
    const isSuccess=true
    if(isSuccess){
        res('Promise success')
    }else{
        rej('promise failed')
    }
}) 

myPromise.then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})

