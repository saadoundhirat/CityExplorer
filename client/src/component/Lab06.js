import React, { Component } from 'react'
import FormCom from '../component/locationCOM/FormCom';
import axios from 'axios';
import CityData from '../component/locationCOM/CityData';

class Lab06 extends Component {

  constructor(props){
    super(props);
    this.state={
      cityData:{},
      mapData:'',
      displayErrMsg:false,
      displayCityData:false

    }
  }
// ๐คจ๐ค๐ค๐คฉ๐ค  start lab06 ๐คฉ๐ค๐ค๐ค๐ค
  // function HIT API
  getCityName= async (cityName)=>{

      const KEY =process.env.REACT_APP_LOC_KEY;
      let URL =`https://eu1.locationiq.com/v1/search.php?key=${KEY}&q=${cityName}&format=json`;


      //  get data
      try{
            let result = await axios.get(URL);
            // GET STATIC MAP (IMG)
            let cityObject =result.data[0];

            if(cityObject){
                let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${KEY}&center=${cityObject.lat},${cityObject.lon}`;
                this.setState({
                  cityData: result.data[0],
                  mapData:mapURL,
                  displayCityData:true
                })
            }
       }
       catch(err){

         this.setState({
          displayErrMsg:true,
          displayCityData:false
         })

        if ( err.response.status === 404) {
          alert("Not Found.");
          return err;
        } else {
          throw err;
        }

      }
  }
 // ๐คจ๐ค๐ค๐คฉ๐ค  end lab06 ๐คฉ๐ค๐ค๐ค๐ค

  render() {
    return (
      <div>

       {/* ๐คจ๐ค๐ค๐คฉ๐ค  start render lab06 ๐คฉ๐ค๐ค๐ค๐ค */}
      <div className="formInfo">
            <FormCom
                getCityName={this.getCityName}
            />

            <CityData 
                  cityData={this.state.cityData}
                  mapData={this.state.mapData}
                  displayErrMsg={this.state.displayErrMsg}
                  displayCityData={this.state.displayCityData}
            />
      </div>
      {/* ๐คจ๐ค๐ค๐คฉ๐ค  end render lab06 ๐คฉ๐ค๐ค๐ค๐ค */}
      </div>
    )
  }
}

export default Lab06;