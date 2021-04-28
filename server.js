// init code 
// importing the modules
const express = require('express');
const app = express();
require('dotenv').config();


// default route
app.get('/',(req,res)=>{
    res.send("Welcome to Fitex...");
});


// assinging the port
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`);
});