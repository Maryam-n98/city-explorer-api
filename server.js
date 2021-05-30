'use strict';

const express = require('express');
const server1 = express();
const cors=require('cors');
require('dotenv').config();
const axios = require('axios');

server1.use(cors());
// const PORT2 =3003;
const PORT2 =process.env.PORT;
const WEATHER_API_KEY=process.env.WEATHER_API_KEY;
const MOVIE_API_KEY=process.env.MOVIE_API_KEY;

server1.listen(PORT2,()=>{
    console.log(`i am listening on port ${PORT2}`);
})

server1.get('/ahmad',gettingWeather)
server1.get('/movies',gettingMovies)

// =>{
    // let x= 'hellooo from sever, yes i recieved your request(from any where). this is my response'
    // let requsetedCity=req.query.desired_city;
    // let weathUrlReq=`http://api.weatherbit.io/v2.0/current?city=amman&key=6f0c8f51aa1b4209874f1fc926c23aaf`
    // let wheatherApiResult= await axios.get(weathUrlReq);
    // let finalData=new Forecast(wheatherApiResult.data.data)
    // let cityAllWheatherData= weatherData.find(item=>{
    //     if (requsetedCity.toLowerCase()==item.city_name.toLowerCase()) {
    //         return item;
    //     } 
    
    // });
    // let citySpecificData=cityAllWheatherData.data.map(item=>{
    //        return new Forecast(item);
    // });
    // res.send(x);
// })

function  gettingWeather(request,response) {
    let x= 'hellooo from sever, yes i recieved your request(from any where). this is my response'
    let requsetedCity=request.query.desired_city;
    let weathUrlReq=`http://api.weatherbit.io/v2.0/current?city=${requsetedCity}&key=${WEATHER_API_KEY}`
    // let wheatherApiResult= 
    axios
    .get(weathUrlReq)
    .then(results=>{
        let r=results.data.data[0];
        console.log('resul.data.data',r);
        let finalData=new Forecast(r);
        response.status(200).send(finalData);

    })
    .catch(err=>{
        response.status(500).send(`error in getting data ==> ${err}`)
    })
}

//second request : for movies
// https://api.themoviedb.org/3/search/movie?api_key=a774e112885b40790b2a79a1cd7e8d02&query=amman
function gettingMovies(request,response) {
    let requsetedMovie=request.query.desired_city;

    let movieUrlReq=`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${requsetedMovie}`;
    axios
    .get(movieUrlReq)
    .then(results=>{
        let movies=results.data.results;
        response.send(movies);
    })
}


class Forecast {

    constructor(newInstance){
        // this.descreption = `temp = ${newInstance.low_temp} C , wind speed = ${newInstance.max_temp} with ${newInstance.weather.description}`

        // this.date= newInstance.valid_date;
        this.descreption = `temp = ${newInstance.temp} C , wind speed = ${newInstance.wind_spd} with ${newInstance.weather.description}`

        this.date= newInstance.datetime;
    }
}

// class Movie{
//     constructor(newInstance){
//         this.name =
//         this.imgUrl =
//         this.overView = 
//     }
// }
server1.get('*',(req,res)=>{
   
    res.status(404).send('invalid request to backend')
});
