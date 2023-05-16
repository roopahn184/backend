var express = require('express')
var app =express()

app.get("/",(req, resp)=>{
  resp.send("Root request")
});
app.get("/user", (req, resp)=>{
  resp.send("User Request")
});
app.get("/employee",(req, resp)=>{
  resp.send(`<h1>Employee Data </h1>`)
});

app.listen(5000,(err)=>{
    if (err) throw err
    console.log("server is running on port no:5000");
});