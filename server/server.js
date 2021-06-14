import dotenv from 'dotenv'
dotenv.config()

// import dependencies 
import express from 'express';
import cors from 'cors';


// 😏😏😏build server 
const server = express();
server.use(cors());
const PORT= process.env.PORT || 4000;
console.log(process.env.PORT);



// 😏😏😏 listen to the server 
server.listen(PORT ,()=>{
    console.log(`server listen on port: ${PORT}`);
})


