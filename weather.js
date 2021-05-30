const axios = require('axios');
class Forecast {

    constructor(newInstance) {
        this.descreption = `temp = ${newInstance.temp} C , wind speed = ${newInstance.wind_spd} with ${newInstance.weather.description}`

        this.date = newInstance.datetime;
    }
}

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
function gettingWeather(request, response) {
    let x = 'hellooo from sever, yes i recieved your request(from any where). this is my response'
    let requsetedCity = request.query.desired_city;
    let weathUrlReq = `http://api.weatherbit.io/v2.0/current?city=${requsetedCity}&key=${WEATHER_API_KEY}`
    axios
        .get(weathUrlReq)
        .then(results => {
            let r = results.data.data[0];
            console.log('resul.data.data', r);
            let finalData = new Forecast(r);
            response.status(200).send(finalData);

        })
        .catch(err => {
            response.status(500).send(`error in getting data ==> ${err}`)
        })
}
module.exports = gettingWeather;
