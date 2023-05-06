var express = require('express');
var app = express();

app.get("/", (req, resp)=>{
    console.log(req);
  resp.send("Root request")
});
app.get("/User", (req, resp)=>{
    console.log(req);
  resp.send("User Data")
});
app.get("Employee", (req, resp)=>{
    resp.send("Employee Data")
})
app.listen(5000,(err)=>{
    if (err) throw err ;
    console.log("server running successfully on port no:5000")
});