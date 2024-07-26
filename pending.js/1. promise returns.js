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

gt(9,6).then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})