const http = require('http')
const server = http.createServer((req, resp) =>{
  resp.writeHead(200,{ "content-type": "text/html"})
  resp.end("<h1> welcome - node js server</h1>")
  
})
server.listen(8080, (err) =>{
  if (err) throw err
  console.log(`server is running on: http://localhost:${8080}`);
})