const express =require('express')
const cors = require('cors')
const weatherData = require('./data/weather.json')

require('dotenv').config()
// 😏😏😏build server 
const server = express();
server.use(cors());
const PORT= process.env.PORT || 5000;




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
        console.log(typeof cityFound)
        if(cityFound!==undefined){
            console.log(typeof cityFound)
            let retObject= {
                citycheck:true,
                cityname: cityFound.city_name,
                lon:cityFound.lon,
                lat:cityFound.lat
            }
            res.status(200).send(retObject);
        }else if(cityFound===undefined){
            let retErrObject = {
                citycheck:false,
                errMsg:`city ${cityName} not found use (Amman,Paris,Seattle)`
            }
            res.send(`your ${cityName} not found` , retErrObject);
        }else{
            res.status(404).send(`your ${cityName} not found`)
        }

    }catch{
        let retErrObject = {
            citycheck:false,
            errMsg:`city ${cityName} not found use (Amman,Paris,Seattle)`
        }
            res.status(404).send(retErrObject)
    }
}


// ============================================================
// handleWeather to get weather data for city name (amman)
//http://localhost:4050/weather?searchQuery=Amman&lat=31.95&lon=35.91
function handleWeather (req,res){
    let lat = req.query.lat;
    let lon = req.query.lon;
    let searchQuery = req.query.searchQuery;

    try {
        
        let weatherObject = weatherData.find((element) =>{
    
            if(searchQuery===element.city_name){
                return element;
            }
        });
        let modeldData = weatherObject.data.map(element =>{
            return new forcast(element);
        })
        
        // send res => weather front-end
        if (weatherObject!==undefined || modeldData !==undefined ){
            res.send(modeldData);
        }else{
            res.send("there is an error" , typeof weatherObject);
        }
        
    }catch{
        let retErrObject = {
            weatherData:"undefined",
            errMsg:`city not found use (Amman,Paris,Seattle) ???????`
            }
            res.status(404).send(retErrObject)
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


