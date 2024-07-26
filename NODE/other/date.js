//date

const path = require('path');
const fs = require('fs')

const today = new Date().toString()
const filepath = path.join(__dirname,'sample.txt')

fs.writeFile(filepath,today,(err)=>{
    if(err){
        console.log(err);
    }
    return
})







