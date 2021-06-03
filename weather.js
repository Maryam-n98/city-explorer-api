const axios = require('axios');

let inMemory={};

class Forecast {

    constructor(newInstance){
        this.descreption = `temp = ${newInstance.temp} C , wind speed = ${newInstance.wind_spd} with ${newInstance.weather.description}`

        this.date= newInstance.datetime;
    }
}
const WEATHER_API_KEY=process.env.WEATHER_API_KEY;


function  gettingWeather(request,response) {
    let requsetedCity=request.query.desired_city;
    let weathUrlReq=`http://api.weatherbit.io/v2.0/current?city=${requsetedCity}&key=${WEATHER_API_KEY}`
  
   if (inMemory[requsetedCity] !== undefined) {
       response.send(inMemory[requsetedCity]);
   } else {
       
       axios
       .get(weathUrlReq)
       .then(results=>{
           let r=results.data.data[0];
           let finalData=new Forecast(r);
           response.status(200).send(finalData);
           inMemory[requsetedCity]=finalData;
     
       })
       .catch(err=>{
           response.status(500).send(`error==> ${err}`)
       })}   
}

module.exports = gettingWeather;