const express = require("express");
const mdb = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const Signup = require('./models/signupScheme');
const app = express();
const PORT = 2005;
dotenv.config();
app.use(express.json())

mdb.connect(process.env.MONGODB_URL)
.then(()=>{console.log("MDB connection successful")})
.catch((err)=>{console.log("check connection string", err)})

app.get("/",(req, res) => {
    res.send("<h2>Welcome to backend server</h2>");
});

app.post("/signup", async (req,res)=>{
    try{
        const {firstName, lastName, email, password, phone} = req.body
        const hashedpassword = new bcrypt.hash(password, 10)
        const newSignup = new Signup({ firstName, lastName, email, hashedpassword, phone });
        await newSignup.save();
        console.log("Signup successful");
        res.status(201).json({messge:"signup Successful", isSignup:true})
    } catch(err) {
        res.status(500).json({messge: "Signup unsuccessful", isSignup: false})
    }
})

app.listen(PORT, ()=>{
    console.log("server started successfully");
    console.log('http://localhost:'+PORT);
});