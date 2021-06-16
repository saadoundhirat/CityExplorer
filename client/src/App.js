import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Lab06 from './component/Lab06';
import Lab07 from './component/Lab07';
import Lab08 from './component/Lab08';

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
                        Check Location !
                        </Button>   

                        <Button 
                        variant="warning" 
                        type="submit"
                        onClick={this.showlab07}
                        >
                        Check Weather !
                        </Button>  

                        <Button 
                        variant="success" 
                        type="submit"
                        onClick={this.showlab08}
                        >
                        Check Movies !
                        </Button>   
   
            </ButtonGroup>
                

        {this.state.lab06 &&       
           <Lab06/>
         }  

          {this.state.lab07 &&       
           <Lab07/>
         }  
         {this.state.lab08 &&       
           <Lab08/>
         }   

        <Footer/>

        </div>
    )
  }
  }


export default App;

