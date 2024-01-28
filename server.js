const express = require('express');
const path = require('path');
const { get } = require('@vercel/edge-config');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/app',(req,res)=>{
    res.send(`Data from data base ${get("greeting")}`);  
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

module.exports = app;