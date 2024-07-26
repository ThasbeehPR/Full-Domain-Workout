// passing Key Value Pair
const express = require('express');
const app =express()

app.get('/',(req,res)=>{
    res.send(req.query)
}).listen(2000,()=>{console.log('server is running...');})


// http://localhost:2000/?name=thasbeeh&&age=22&&job=developer
