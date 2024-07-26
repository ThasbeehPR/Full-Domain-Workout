const express=require('express')
const app=express();

const persons = {
    '1':{name:'Thasbeeh',age:22},
    '2':{name:'Manaf',age:33},
    '3':{name:'Sreeyes',age:24},
    '4':{name:'Samil',age:30},
    '5':{name:'Siraj',age:23},
    '6':{name:'Ashwin',age:25},
    '7':{name:'Ansari',age:30},
    '8':{name:'Devan',age:30},

}

app.get('/',(req,res)=>{
    const current = req.query.check
    const current_id = persons[current]
    res.send(current_id)
})


app.listen(2000,()=>{console.log('workinbg...');})


// http://localhost:2000/?check=1