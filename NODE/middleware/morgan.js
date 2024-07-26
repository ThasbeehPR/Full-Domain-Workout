const express = require('express');
const app = express()
const morgan = require('morgan');

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send('hello word')
})

app.listen(2000,()=>{console.log('Server is running...')})
