const express = require('express');
const fs = requrie('fs');

var app = express();

app.get('/',(req,res)=>{
    // fs.readFile('public/index.html',(er,da)=>{
    //     if(er){
    //         res.json(er);
    //     }
    //     else{
    //         res.send(da.toString());
    //     }
    // })  
    
    res.send('Hello World');
});

module.exports = app;