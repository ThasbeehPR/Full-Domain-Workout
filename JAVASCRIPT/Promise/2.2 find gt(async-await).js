//return a promise that in function a>b
function gt(a,b){
    return new Promise((res,rej)=>{
        if(a>b){
            res(`Promise resolved , ${a}  grater than ${b}`)
        }else{
            rej(`Promise rejected ,${b} not greather than ${a}` )
        }
    })
}

async function handlePro(a,b){
    try{
        const result =await gt(a,b)
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
handlePro(9,17)