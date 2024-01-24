const express = require('express');
const fs = require('fs');

var app = express();

app.get('/api/*',(req,res)=>{
    res.send('Hello My Name is '); 
});

// app.listen(3000,()=>{
//     console.log('Server is listening');
// }) 

module.exports = app;