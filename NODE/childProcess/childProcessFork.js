//child process create using fork

const {fork} = require('child_process')

const child = fork('child.js')

child.on('message',(message)=>{
    console.log(`message from child : ${message}`);
})

child.send('parent say, hii boy')




// const  {fork}  = require('child_process');
// {} is destructring from child_processes module fork method in it
// // or
// const fork  = require('child_process').fork








