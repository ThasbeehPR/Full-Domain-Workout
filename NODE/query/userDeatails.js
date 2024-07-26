const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    const name = req.query.name
    const age = req.query.age
    res.send(`hii my name is ${name} and i am ${age} old`)
}).listen(2000,()=>{console.log('Server is running...');})

// http://localhost:2000/?name=robi&&age=70