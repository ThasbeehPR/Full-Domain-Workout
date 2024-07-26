//sum Query
const express = require('express');
const app = express()

app.get('/',(req,res)=>{

    const num1=parseInt(req.query.num1)
    const num2=parseInt(req.query.num2)
    const sum=num1+num2

    if(isNaN(num1)||isNaN(num2)){
        res.send('valid number please')
    }else{
        res.send(`sum : ${sum}`)
    }

})

app.listen(2000,()=>{console.log('server is running....')})

// http://localhost:2000/?num1=3&&num2=4



















// sumQuery