const http = require('http')
const fs = require('fs')
const server = http.createServer((req, resp) => {
 resp.writeHead(200, {"Content-Type":"text/html" })
 fs.readFile('index.html', utf-8, (err, data) =>{
    Response.end(data)
 })
})
server.listen(8080, '127.0.0.1', () => {
 console.log('server is running on......http://127.0.0.1:8080');
})