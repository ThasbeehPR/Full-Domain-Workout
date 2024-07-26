//child process create using fork

const {fork} = require('child_process')

const child = fork('child.js')

child.on('message',(message)=>{
    console.log(`message from child : ${message}`);
})

child.send('parent say, hii boy')