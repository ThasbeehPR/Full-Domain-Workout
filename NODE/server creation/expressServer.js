const express = require('express');
const app = express()

app.get('/',(req,res)=>{
        res.send('Hii guys...')
}).listen(2000,()=>{console.log('workingg....');})