import React, { Component } from 'react';
import {
    Form, 
    Button,
    } from 'react-bootstrap/'

class FormCom extends Component {

    handleForm= async (event)=>{
        event.preventDefault();
        let  cityName = event.target.cityName.value;
        this.props.getCityName(cityName);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleForm}>
                        {/* get city name */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <h2>Get City Information</h2></Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter City Name" 
                            name="cityName" 
                            custom
                            // size={'md-6'}
                            />
                        <Button 
                        variant="danger" 
                        type="submit">
                        Explore City!
                        </Button>
                        </Form.Group>   
                </Form>
            </div>
        )
    }
}

export default FormCom;
