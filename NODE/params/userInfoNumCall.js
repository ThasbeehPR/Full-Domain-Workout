//user info by number calling

const express = require('express')
const app = express()

const persons = {
    '1':{name:'Thasbeeh',age:22},
    '2':{name:'Ashique',age:23},
    '3':{name:'Rasal',age:21},
    '4':{name:'Ebi',age:20},
    '5':{name:'Faazi',age:24},
    '6':{name:'Ameer',age:27},
    '7':{name:'Rizwan',age:30},
}

app.get('/:check',(req,res)=>{

    const current = req.params.check
    const current_id = persons[current]
    res.send(current_id)

})

app.listen(2000,()=>console.log('Its working...'))