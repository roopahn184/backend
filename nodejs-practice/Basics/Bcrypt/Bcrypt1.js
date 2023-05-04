const bcrypt = require('bcryptjs');
let user_Payment = {
    name:"Roopa",
    password:"dd123",
    cvv:"2233344445555"
};

let newPassword = bcrypt.hashSync(user_Payment.password, 10);
console.log(newPassword);
let New_Payment ={...user_Payment, password:newPassword}
console.log(newPassword);
console.log(user_Payment);

if(bcrypt.compareSync("dd123", user_Payment.password)){
    console.log("success");
}else{
    console.log("failure");
}

