const fs = require('fs')

let data = fs.readFileSync("first.txt", "utf-8")
console.log(data);

let New_data = fs.readFile("first.txt", "utf-8", (err, New_data)=>{
    fs.writeFile("one.txt", New_data,()=>{
        if (err) throw err;
        console.log("success");
    })
    
})