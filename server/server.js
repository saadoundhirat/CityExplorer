const express =require('express')
const cors = require('cors')
const weatherData = require('./data/weather.json')

require('dotenv').config()
// 😏😏😏build server 
const server = express();
server.use(cors());
const PORT= process.env.PORT || 4020;



// ==================================================================================
// adding the function to the server

// http://localhost:4000/
    server.get('/' , landingRoute)
// http://localhost:4000/
    server.get('/test' , handleTestRoute)
// http://localhost:4000/weathercity
    server.get('/checkcity' , handleCheckCity)
// http://localhost:4000/weather
    server.get('/weather' , handleWeather)
// http://localhost:4000/ggggggg
    server.get('*' , othersRoute)


// landingRoute 

function landingRoute (req,res){
    res.status(200).send(" Landing Routes HERE");
}

// handleTestRoute 
function handleTestRoute(req,res){
    res.send('server works coorect');
}

// ============================================================
//handleCheckCity
//http://localhost:4020/checkcity?searchQuery=Amman
function handleCheckCity(req,res){
    let cityName = req.query.searchQuery;
    try{
        
        let cityFound = weatherData.find((element)=>{
            if (element.city_name === cityName){
                return element;
            }
        })    
        if(cityFound){
            let retObject= {
                citycheck:true,
                cityname: cityFound.city_name,
                lon:cityFound.lon,
                lat:cityFound.lat
            }
            res.status(200).send(retObject);
        }

    }catch{
            // let retErrObject = {
            //     citycheck:false,
            //     errMsg:`city ${cityName} not found use (Amman,Paris,Seattle)`
            // }
            res.status(404).send(" your city not found");
        
    }
}


// ============================================================
// handleWeather to get weather data for city name (amman)
//http://localhost:5000/weather?searchQuery=Amman&lat=-33.87&lon=151.21
// &lat=-33.87&lon=151.21
function handleWeather (req,res){
    let lat = req.query.lat;
    let lon = req.query.lon;
    let searchQuery = (req.query.searchQuery);

    try {
        
        let weatherObject = weatherData.find(element =>{
            // || (element.lat===lat && element.lat===lon)
            if (element.city_name === searchQuery || (element.lat===lat && element.lat===lon)){
                return element;
            }
        });

        let modeldData = weatherObject.data.map(element =>{
            return new forcast(element);
        })

        // send res => weather front-end
        res.send(modeldData);
        
    }catch{
        if (weatherObject.length === 0){
            res.status(404).send("city information not found");
        }else{
            res.status(500).send("cant Solve the request");
        }

    }

}

// class forcast
class forcast {
    constructor(object) {
        this.date=object.valid_date;
        this.description=object.weather.description;
    }
}



// othersRoute
function othersRoute (req,res){
    server.res("This route not coverd yet");
}
// 😏😏😏 listen to the server 
server.listen(PORT ,()=>{
    console.log(`server listen on port: ${PORT}`);
})


