const axios =require('axios');
// movies handler 
// http://localhost:4006/movies?searchQuery=....
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&searchQuery=AMMAN
function handleMovies (req, res){
    let key= process.env.MOVIES_KEY;
    let cityName= req.query.searchQuery;
    // let Url=https://api.themoviedb.org/3/search/movie?api_key=<>&query=${cityName}
    let URL= `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${cityName}`;

    axios.get(URL).then(movObj=>{
        // res.status(200).send(movObj.data);

        let retData = movObj.data.results.map(element=>{
            return new movies(element);
        })
        // console.log(retData)
        res.status(200).send(retData);

    })
    .catch(err=>{
        console.log(' catch an error',err)
        res.status(500).send(err.massage)
    })
}

class movies {
    constructor(moviesObject){
        this.title=moviesObject.original_title;
        this.overview=moviesObject.overview;
        this.average_votes=moviesObject.vote_average;
        this.total_votes=moviesObject.vote_average;
        this.image_url=`https://image.tmdb.org/t/p/w500/${moviesObject.poster_path}`||`https://image.tmdb.org/t/p/w500/${"pZfXVImuo4Iffo8Vv3dJBNQ7BJj.jpg"}`;
        this.popularity=moviesObject.popularity;
        this.released_on=moviesObject.release_date;
    }
}

module.exports=handleMovies;