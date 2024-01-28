const express = require('express');
const path = require('path');
const { KVNamespace } = require('@vercel/node');
const kv = new KVNamespace('ecfg_4osz0xezgwcrngstdh1psqgyh2is');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/app',(req,res)=>{
    var data = kv.get("greeting");
    res.send(`Data from data base ${data}`);  
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

module.exports = app;