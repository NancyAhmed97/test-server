const express = require('express');
const app = express();

app.use("/",(req,res)=>{
res.send('hello')
})
app.listen(5000, ()=>{

    console.log('server is running http://localhost:5000');
})