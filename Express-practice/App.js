var express = require('express')
var app =express()

app.get("/",(req, resp)=>{
  resp.send("Root request")
})

app.listen(5000,(err)=>{
    if (err) throw err
    console.log("server is running on port no:5000");
});