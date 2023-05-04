const bcrypt = require('bcryptjs')
let user_Details = {
    name: "roopa",
    email:"roops@gmail.com",
    password: "rrrr123",
};
let newPassword = bcrypt.hashSync(user_Details.password, 10);
console.log(newPassword);

user_Details = {...user_Details,password:newPassword}
console.log(newPassword);
console.log(user_Details);

if(bcrypt.compareSync("rr123",user_Details.password )){
    console.log("password matched");
}else{
    console.log("not matched");
}