'use strric';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const server = express();
const weather =require('./weather.json');
// const PORT = 3001;
const PORT = process.env.PORT ;
server.use(cors());



server.listen(PORT,() => {
  
  console.log( `Listening on PORT ${PORT}`); 
  
})


      class ForeCast {
        
        constructor(element){
          
            
          
             this.des=`Low of :${element.low_temp}and a high of ${element.max_temp} with a${element.description} `
             this.date= element.valid_date;
            
        
          }
        }
        
server.get('/weather',(req,res)=>{
  let cityname = req.query.cityname;

  let city = weather.find(item=>{
    if (cityname== item.city_name ){

      return item;
    }
    // console.log(city);
  });
  
      try {
        
        let newForecast = city.data.map(item => {
          
          return new ForeCast(item);
        });
        res.send(newForecast);
      } 
      
      catch {
        res.status(500).send('Sorryxx ');
      }
      
})



server.get('*', (req, res) => {
  res.status(404).send(  '"error": "Something went wrong."');
})

