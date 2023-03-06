const http= require('http')
const dotenv= require('dotenv')
const fs= require('fs')
const path= require('path')




dotenv.config({path:'./config/config.env'})
let port = process.env.PORT
let host = process.env.HOSTNAME

let server = http.createServer((req, resp)=>{
 let url = req.url
 console.log(url)
 if(url === "/"){
    fs.readFile(path.join(__dirname, "views", "main.html"), 'utf-8', (err, data)=>{
        resp.writeHead(200, {'Content-type':'text/html'})
        resp.end(data)

    }) 
 }
 if(url === "/phone"){
  fs.readFile(path.join(__dirname, "views", "phone.html"), 'utf-8', (err, data)=>{
      resp.writeHead(200, {'Content-type':'text/html'})
      resp.end(data)

  })
}

})

server.listen(port, host, (err)=>{
  if (err) throw err
  console.log(`server is running:http://${host}:${port}`);
})
