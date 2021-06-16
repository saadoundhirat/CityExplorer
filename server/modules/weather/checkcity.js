const weatherData = require('../data/weather.json')
//handleCheckCity
//http://localhost:4020/checkcity?searchQuery=Amman
function handleCheckCity(req,res){
    let cityName = req.query.searchQuery;
    try{
        let cityFound = weatherData.find(element=>{
            if ((element.city_name).toLowerCase() === cityName.toLowerCase()){
                return element;
            }
        })    
        if(cityFound!==undefined){
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

module.exports =handleCheckCity;