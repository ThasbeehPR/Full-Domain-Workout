//value getting

const express = require('express');
const app = express()

app.get('/:name',(req,res)=>{
    res.send(req.params)
})
app.listen(2000,()=>{console.log('its working')})