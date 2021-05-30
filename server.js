'use strict';
const express = require('express');
const server1 = express();
const cors=require('cors');
require('dotenv').config();
const axios = require('axios');
server1.use(cors());
const PORT2 =process.env.PORT;
const weather=require('./weather');
const movies =require('./movies')
server1.listen(PORT2,()=>{
    console.log(`i am listening on port ${PORT2}`);
})

server1.get('/ahmad',weather)
server1.get('/movies',movies)

server1.get('*',(req,res)=>{
   
    res.status(404).send('invalid request to backend')
});
