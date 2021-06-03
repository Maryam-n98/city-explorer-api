'use strict';
const express = require('express');
const server1 = express();
const cors=require('cors');
require('dotenv').config();
const axios = require('axios');
server1.use(cors());
const PORT =process.env.PORT ;

server1.listen(PORT,()=>{
    console.log(`i am listening on port ${PORT}`);
})

const weather = require('./weather');
const movies = require('./movies');

server1.get('/ahmad',weather)
server1.get('/movies',movies)
server1.get('*',(req,res)=>{
   
    res.status(404).send('invalid request to backend')
});