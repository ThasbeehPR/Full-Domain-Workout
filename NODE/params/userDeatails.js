//showing user deatails

const express = require('express')
const app = express()

app.get('/:name/:age',(req,res)=>{

    const name = req.params.name
    const age = req.params.age

    res.send(`Name is ${name} and age is ${age}`)


}).listen(2000,()=>console.log('working'))