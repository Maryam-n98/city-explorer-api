'use strric';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const server = express();

const weather =require('./weather.json');

const server =express();

// const PORT = 3001;
const PORT = process.env.PORT;
server.use(cors());
// for test onlyy
// console.log(weather);

// server.get('/weathertest',(req,res)=>{
//     let city = weather.data.map(item=>{
//         return item.datetime;
//     })
//     console.log(city);
// res.send(city);
// })

// server.get('/weather',(req,res)=>{
//     console.log(weather);
//     res.send(weather)

// })


server.get('/weather',(req,res)=>{
  let city_name = req.query.city_name
  let lat = req.query.lat;
  let lon = req.query.lon;
  let ForecastNew={};
  // let cityData= req.query
  let city= weather.find(item=>{
      if (item.city_name == city_name.toLowerCase() && item.lat == lat && item.lon == lon)
    
      ForecastNew= Forcecast;
    
      return item;
    })  
  console.log(city);
  res.send(Forecast)
})

class Forcecast {
constructor(arr){
  this.data= arr.data.map(element=>{
   let lowTemp= 'low of'+element.low_temp;
   let highTemp= 'high of'+ element.high_temp;
   let des= 'with'+ element.description;
   let day= element.valid_date;

     return{
      'description': lowTemp + highTemp + des,
      "data": day
    }

  })
}
}

server.get('*', (req, res) => {
  res.status(404).send(  '"error": "Something went wrong."');
})




server.listen(PORT,() => {

  console.log( `Listening on PORT ${PORT}`); 

})
