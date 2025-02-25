const express = require('express');

const app = express();

app.get("/",(req, res) => {
    res.send("<h2>Welcome to backend server hi hello</h2>");
});
const PORT = 2005;

app.listen(PORT, ()=>{
    console.log("server started successfully");
    console.log('http://localhost:2005/');
});