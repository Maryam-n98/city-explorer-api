const axios = require('axios');
const MOVIE_API_KEY=process.env.MOVIE_API_KEY;
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
module.exports = gettingMovies;