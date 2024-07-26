//event emitter
const events =require('events')
const emitter =new events.EventEmitter()

emitter.on('blick',()=>{
    console.log('blick successfully');
})

emitter.emit('blick')
