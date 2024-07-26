const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Nokki nikkathe aduthath padikuu guys...')
    res.end()
})

server.listen(2000,()=>{console.log('server working...')})