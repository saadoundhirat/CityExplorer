import React, { Component } from 'react'
import axios from 'axios';
import ShowData from './moviesCOM/ShowData';
import FormCom from './moviesCOM/FormCom'
import Error from './locationCOM/Error'


export class Lab08 extends Component {

    constructor(props){
        super(props);
        this.state = {
            moviesData:[],
            showMovies:false,
            cityNameStaticErr:{},
            cityNameStaticErrFlag:false
        }
    }

//   😎😋😋😊😋😋😋😊 get data from api movies
  getMovies =(cityName)=>{
    
    let backServer=process.env.REACT_APP_SERVER;
    let URL=`${backServer}/movies?searchQuery=${cityName}`

    axios.get(URL)
    .then((result)=>{
        console.log(result.data)
        this.setState({
            moviesData:result.data,
            showMovies:true
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
                <FormCom
                    getMovies={this.getMovies}
                />
                

                {this.state.showMovies &&
                <ShowData
                moviesData={this.state.moviesData}
                showMovies={this.state.showMovies}
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

export default Lab08
