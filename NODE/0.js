//create a file

const fs = require('fs');

const content = 'hII'

fs.writeFile('sample.txt',content,(error)=>{
if(error){
    console.log('there is error');
}else{
    console.log('successfull');
}
})