const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
// const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
app.use(cors());
app.options('*', cors())


//middleware
app.use(express.json());
app.use(morgan('tiny'));
// app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);


const usersRoutes = require('./routes/users');

const api = process.env.API_URL;

app.use(`${api}/users`, usersRoutes);

//Database
mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})



app.use("/",(req,res)=>{
res.send('hellovvvv2')
})
app.listen(5000, ()=>{

    console.log('server is running http://localhost:5000');
})