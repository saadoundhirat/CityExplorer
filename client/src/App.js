import React, { Component } from 'react'
import './App.css';
import FormCom from './component/FormCom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CityData from './component/CityData';
import Header from './component/Header';
import Footer from './component/Footer';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      cityData:{},
      mapData:'',
      displayErrMsg:false,
      displayCityData:true

    }
  }

  // function HIT API
  getCityName= async (cityName)=>{

      const KEY ='pk.2433e0d8b4747553f8c640bd57b85df3';
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
                  mapData:mapURL
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


  render() {
    return (
      <div>
         <Header/>
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

         <Footer/>
      </div>
    )
  }
}

export default App
