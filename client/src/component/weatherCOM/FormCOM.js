import React, { Component } from 'react';
import {
    Container,
    Form,
    Button,
    // Col,
    // Row,
    // Image
    } from 'react-bootstrap/'

export class FormCOM extends Component {

    handleStaticForm= async (event)=>{
        event.preventDefault();
        let  cityName = event.target.cityNameStatic.value;
        this.props.getCityNameStatic(cityName);
    }    
    handleApiForm= async (event)=>{
        event.preventDefault();
        let  cityName = event.target.cityNameApi.value;
        this.props.getCityNameApi(cityName);
    }

    render() {
        return (
            <div>
                <Container>
                <Form onSubmit={this.handleStaticForm}>
                        {/* get city name */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <h2>Get City Weather FROM Static JSON Data</h2></Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter City Name(STATIC JSON)" 
                            name="cityNameStatic" 
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
                </Container>


                <Container>
                <Form onSubmit={this.handleApiForm}>
                        {/* get city name */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <h2>Get City Weather FROM Weather API SERVER</h2></Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter City Name(FROM API)" 
                            name="cityNameApi" 
                            custom
                            // size={'md-6'}
                            />
                        <Button 
                        variant="info" 
                        type="submit">
                        Explore City!
                        </Button>
                        </Form.Group>   
                </Form>
                </Container>


            </div>
        )
    }
}

export default FormCOM
