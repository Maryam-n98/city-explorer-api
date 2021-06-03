const axios = require('axios');

let inMemory={};

const MOVIE_API_KEY=process.env.MOVIE_API_KEY;
function gettingMovies(request,response) {
    let requsetedMovie=request.query.desired_city;

    let movieUrlReq=`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${requsetedMovie}`;

 
    if (inMemory[requsetedMovie] !== undefined) {
        response.send(inMemory[requsetedMovie]);
    } else {
        axios
        .get(movieUrlReq)
        .then(results=>{
            let movies=results.data.results;
            response.send(movies);
            inMemory[requsetedMovie]=movies;
            console.log('moviiiees');
        })  }

module.exports = gettingMovies;