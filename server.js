const express = require('express');
const fs = require('fs');

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

app.listen(3000,()=>{
    console.log('Server is listening');
})