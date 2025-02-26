const mdb = require('mongoose');

const signupSchema = new mdb.Schema({
    firstName : {type : String},
    lastName : {type : String},
    email : {type : String},
    password : {type : String},
    phone : {type : Number}
})

const Signup = mdb.model("Signup", signupSchema)
module.exports = Signup;