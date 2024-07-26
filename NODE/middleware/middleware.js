//Middleware
const express = require('express')
const app = express()

const middleware = function(req,res,next){
    console.log('middleware');
    next()
}

app.use(middleware)

app.get('/',(req,res)=>{
    res.send('hii')
})

app.listen(2000,()=>{console.log('Server is running...');})