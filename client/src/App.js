import React, { Component } from 'react'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Lab06 from './component/Lab06';
import Lab07 from './component/Lab07';

import {
  Button,
  ButtonGroup
  } from 'react-bootstrap/'



export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lab06:false,
      lab07:false,
      lab08:false,
      lab09:false,
    }
  }

  showlab06=()=>{
    this.setState({
      lab06:true
    })
  }  
  showlab07=()=>{
    this.setState({
      lab07:true
    })
  } 
   showlab08=()=>{
    this.setState({
      lab08:true
    })
  } 
   showlab09=()=>{
    this.setState({
      lab09:true
    })
  }



  render() {
    return (
      <div>
        <Header/>
        <div className="massge"> CLICK ON THE LAB BUTTON TO RENDER THE SOLUTION</div>
        <ButtonGroup size="lg" className="showButtons" m>

                       <Button 
                        variant="danger" 
                        type="submit"
                        onClick={this.showlab06}
                        >
                        Render Lab06!
                        </Button>   

                        <Button 
                        variant="warning" 
                        type="submit"
                        onClick={this.showlab07}
                        >
                        Render LAB07!
                        </Button>  

                        <Button 
                        variant="success" 
                        type="submit"
                        onClick={this.showlab08}
                        >
                        Render LAB08!
                        </Button>   

                        <Button 
                        variant="info" 
                        type="submit"
                        onClick={this.showlab09}
                        >
                        Render LAB09!
                        </Button>    
            </ButtonGroup>
                

        {this.state.lab06 &&       
           <Lab06/>
         }  

          {this.state.lab07 &&       
           <Lab07/>
         }   
{/* 
        {this.state.lab06 &&       
           <Lab08/>
         }   

         {this.state.lab06 &&       
            <Lab09/>
         }    */}

        <Footer/>

        </div>
    )
  }
  }


export default App;

