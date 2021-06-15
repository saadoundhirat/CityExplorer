import React, { Component } from 'react'
import axios from 'axios';
import FormCOM from './weatherCOM/FormCOM'
import ShowStaticData from './weatherCOM/ShowStaticData'
import Error from './locationCOM/Error'
import ShowApiData from './weatherCOM/ShowApiData'
// import {
//     Container,
//     // Col,
//     // Row,
//     // Image
//     } from 'react-bootstrap/'


export class Lab07 extends Component {

    constructor(props){
        super(props);
        this.state = {
            staticCityData:{},
            renderStaticData:false,
            cityNameStatic:'',
            cityNameStaticErr:{},
            cityNameStaticErrFlag:false,
            apiCityData:{},
            showApiData:false

        }
    }

    
//   😎😋😋😊😋😋😋😊 get data from static JSON file 
    getCityNameStatic=(staticCity)=>{
        this.setState({
            cityNameStatic:staticCity,
        }
        )

        // get data from the back-end 
        let backServer=process.env.REACT_APP_SERVER;
        //http://localhost:4050/weather?searchQuery=Amman&lat=31.95&lon=35.91
        let URL=`${backServer}/weather?searchQuery=${staticCity}`
         axios.get(URL)
        .then((result)=>{
            this.setState({
                staticCityData:result.data,
                renderStaticData:true,
            })
        })
        .catch(err=>{
            this.setState({
                cityNameStaticErr:err,
                cityNameStaticErrFlag:true
            })
        })
    } 
    
//   😎😋😋😊😋😋😋😊 get data from api 

getCityNameApi=(cityName)=>{
    console.log(cityName)
    let backServer=process.env.REACT_APP_SERVER;
    let URL=`${backServer}/apiWeather?searchQuery=${cityName}`

    axios.get(URL)
    .then((result)=>{
        this.setState({
            apiCityData:result.data,
            showApiData:true
        })
    })
    .catch((err)=>{
        this.setState({
            cityNameStaticErr:err,
            cityNameStaticErrFlag:true
        })
    })
}


    render() {
        return (
            <div>
                <FormCOM
                getCityNameStatic={this.getCityNameStatic}
                getCityNameApi={this.getCityNameApi}
                />

                {this.state.renderStaticData &&
                <ShowStaticData
                staticCityData={this.state.staticCityData}
                />
                }

                {this.state.cityNameStaticErrFlag &&
                <Error
                errMassage={this.state.cityNameStaticErr}
                />
                }

            </div>
        )
    }
}

export default Lab07
