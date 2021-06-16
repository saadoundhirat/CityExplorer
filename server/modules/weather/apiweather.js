const axios =require('axios');
//  SLOVING LAB 08
// https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY
// http://localhost:4060/apiweather?city=Amman;
function handleApiWeather (req,res){
    let key = process.env.WHEATHER_KEY;
    let cityName = req.query.city;
    // let lon =req.query.lon;
    // let lat =req.query.lat;
    let URL=`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${key}`;

    axios.get(URL)
    .then(result=>{
        let retData = result.data.data.map(element =>{
            return new forcast(element);
        })  
        res.send(retData);
        
    })
    .catch(err=>{
        console.log(' catch an error',err)
        res.status(500).send(err.massage)
    })
}

// class forcast
class forcast {
    constructor(object) {
        this.date=object.valid_date;
        this.description=object.weather.description;
    }
}


module.exports =handleApiWeather;