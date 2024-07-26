process.on('message',(message)=>{
  console.log(`message from parent : ${message} `);
})
process.send('child say, yeh Broii')