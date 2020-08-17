const http = require('http')
const fs = require('fs')

var contents = fs.readFileSync('serverconfig.json')
console.log(''+contents)
const config = JSON.parse(contents)

let server = http.createServer((req, res)=>{
    console.log(req.url)
    fs.readFile('files/' + req.url, (err, data)=>{
        if(err) {
            res.writeHead(404);
            res.end('Content not available')
        };
        console.log('' + data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('' + data)
    })
})

server.listen(config.port, ()=>{
    console.log(`listening on port ${config.port}`)
})