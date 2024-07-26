//error handling middleware
const express = require('express')
const app = express()

app.get('/page',(req,res,next)=>{
    next(new Error('this error handling middleware'))
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(404).send('page not found')
})

app.listen(2000,()=>{console.log('Server is running...');})



