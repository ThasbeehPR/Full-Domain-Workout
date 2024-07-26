function Even(a){
    return new Promise((res,rej)=>{
        if(a%2==0){
            res(`${a} is even`)
        }else{
            rej(`${a} is not even`)
        }
    })
  }
  //then catch
    Even(8).then((message)=>{
        console.log(message)
    }).catch((err)=>{
        console.log(err)
    })
    
  //async await
    async function findEven(a){
        try{
            const result = await Even(a)
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }
    findEven(1)