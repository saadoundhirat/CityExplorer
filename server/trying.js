// import dotenv from 'dotenv';
// dotenv.config();


// // import dependencies 
// import express from 'express';
// import cors from 'cors';

// // 🥱🥱😫 load the json file 
// // const weatherData =require('./data/weather.json');
// // import weatherData from './data/weather.json';

// import readFileSync from ('fs');
// let loadData = ()=>JSON.parse(readFileSync('./data/weatherdata.json'));

// console.log(loadData);






// // 😏😏😏build server 
// const server = express();
// server.use(cors());
// const PORT= process.env.PORT || 4000;
// console.log(process.env.PORT);



// // ==================================================================================
// // adding the function to the server

// // http://localhost:4000/
//     server.get('/' , landingRoute)
// // http://localhost:4000/weather
//     server.get('/' , handleWeather)
// // http://localhost:4000/weather?city=amman
//     // server.get('/' , landingRoute)
// // http://localhost:4000/ggggggg
//     server.get('*' , othersRoute)


// // landingRoute 

// function landingRoute (req,res){
//     response.status(200).send(" Landing Routes HERE");
// }

// // handleWeather
// function handleWeather (req,res){
//     let lat = req.query.lat;
//     let lon = req.query.lon;
//     let searchQuery = req.query.searchQuery;

//     try{
//     let cityData = weatherData.data((element) => {
//         if (element.city_name === searchQuery && element.lat===lat && element.lon === lon)
//             return element;     
    
//         })
//         res.status(200).send(cityData)
//     }catch(err){
//         res.status(404).send("YOUR City Not Found",err);
//     }
// }



// // othersRoute
// function othersRoute (req,res){
//     server.res("This route not coverd yet");
// }
// // 😏😏😏 listen to the server 
// server.listen(PORT ,()=>{
//     console.log(`server listen on port: ${PORT}`);
// })


