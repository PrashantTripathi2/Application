const express = require('express');
const fs = require('fs');

var app = express();

app.get('/',(req,res)=>{
    res.send('Fron api path'); 
});

app.listen(3000,()=>{
    console.log('Server is listening');
})