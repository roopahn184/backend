const jwt = require("jsonwebtoken")

let user ={
    email:"grretlabs@gmail.com",
    password:"pp123"
}

let payload={
     id:user.email,
}
let secretKey="hdvffo"
let token = jwt.sign(payload, secretKey,{expiresIn:60*60})
console.log(token);

jwt.verify(token,secretKey,(err,newpayload)=>{
   if (err) throw err
   console.log(newpayload);
})