const myPromise = new Promise((res,rej)=>{
    const isSuccess=true
    if(isSuccess){
        res('Promise success')
    }else{
        rej('promise failed')
    }
}) 


async function pro(){
    try{
        const result = await myPromise
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

pro()