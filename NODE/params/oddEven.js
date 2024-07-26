//oddEven
const express = require('express');
const app = express()

app.get('/:num',(req,res)=>{

    const num = parseInt(req.params.num)
    if(num%2==0){
        res.send(`${num} is even `)
    }else{
        res.send(`${num} is odd`)
    }

})

app.listen(2000,()=>{console.log('server working...')})