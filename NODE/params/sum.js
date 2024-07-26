//sum
const express = require('express')
const app = express()

app.get('/:num1/:num2',(req,res)=>{

const num1 = parseInt(req.params.num1)
const num2 = parseInt(req.params.num2)
const sum=num1+num2

if(isNaN(num1)||isNaN(num2)){
    res.send('enter valid number')
}else{
    res.send(`sum is ${sum}`)
}

}).listen(2000,()=>console.log('workingg'))