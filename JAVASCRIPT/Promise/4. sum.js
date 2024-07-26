let sum = 0
function add(a,b){
    return new Promise((res,rej)=>{
        sum=parseInt(a)+parseInt(b)
        if(isNaN (sum)){
            rej('enter valid number')
        }else{
          res(`sum :${sum}`)
        }
    })
}

add(5,3).then((message)=>{
    console.log(message)
}).catch((err)=>{
    console.log(err)
})

add('sxvhs',3).then((message)=>{
    console.log(message)
}).catch((err)=>{
    console.log(err)
})