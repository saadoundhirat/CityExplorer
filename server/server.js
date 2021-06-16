const express =require('express')
const cors = require('cors')
// const weatherData = require('./data/weather.json')
const axios = require('axios')
require('dotenv').config()

// 😏😏😏build server 
const server = express();
server.use(cors());
const PORT= process.env.PORT || 5000;

// modules weather
const handleCheckCity= require('./modules/weather/checkcity.js');
const handleWeather= require('./modules/weather/staticweather.js');
const handleApiWeather= require('./modules/weather/apiweather.js');
//  moduels movies 
const handleMovies =require('./modules/movies/apimovie.js')
const routes = require('./modules/basicRoutes.js')


// ==================================================================================
// adding the Routes to the server

// http://localhost:4000/
    server.get('/' , routes.landingRoute)
// http://localhost:4000/test
    server.get('/test' , routes.handleTestRoute)
// http://localhost:4000/weathercity
    server.get('/checkcity' , handleCheckCity)
// http://localhost:4000/weather
    server.get('/weather' , handleWeather)
// http://localhost:4000/apiweather/city=....
    server.get('/apiweather' , handleApiWeather)
// http://localhost:4000/movies/searchQuery=....
    server.get('/movies' , handleMovies)
// http://localhost:4000/ggggggg
    server.get('*' , routes.othersRoute) 


// 😏😏😏 listen to the server 
server.listen(PORT ,()=>{
    console.log(`server listen on port: ${PORT}`);
})


