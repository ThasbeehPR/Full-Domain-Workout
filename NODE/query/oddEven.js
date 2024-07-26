// odd Even
const express = require('express')
const app = express()

app.use('/',(req,res)=>{

    const num = parseInt(req.query.num)

    if(num%2!==0){
        res.send(`${num} its is odd number`)
    }else{
        res.send(`${num} is even number`)
    }
    
}).listen(2000,()=>{console.log('server is running...')})