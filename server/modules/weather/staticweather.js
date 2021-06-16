const weatherData = require('../data/weather.json')
// ============================================================
// handleWeather to get weather data for city name (amman)
//http://localhost:4050/weather?searchQuery=Amman&lat=31.95&lon=35.91
function handleWeather (req,res){
    // let lat = req.query.lat;
    // let lon = req.query.lon;
    let searchQuery = req.query.searchQuery;

    try {
        
        let weatherObject = weatherData.find((element) =>{
    
            if(searchQuery.toLowerCase()===element.city_name.toLowerCase()){
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

module.exports=handleWeather;