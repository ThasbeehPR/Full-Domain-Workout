//router middleware
const express = require('express')
const app = express
const router = express.Router()

router.use((req,res,next)=>{
    console.log('roter triggered');
})

router.get('/',(req,res)=>{
    res.send('This is router middleware')
})

app.use(('/router',router))
app.listen(2000,()=>{console.log('Server is running...');})
