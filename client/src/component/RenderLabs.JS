import React, { Component } from 'react';
import {
    Form, 
    Button,
    } from 'react-bootstrap/'

export class RENDERLABS extends Component {
    render() {
        return (
            <div>
             <Form onSubmit={this.handleForm}>
                        {/* get city name */}
            
                        <Button 
                        variant="danger" 
                        type="submit">
                        Render Lab06!
                        </Button>   

                        <Button 
                        variant="danger" 
                        type="submit">
                        Render LAB07!
                        </Button>  

                        <Button 
                        variant="danger" 
                        type="submit">
                        Render LAB08!
                        </Button>   

                        <Button 
                        variant="danger" 
                        type="submit">
                        Render LAB09!
                        </Button>
 
                </Form>
            </div>
        )
    }
}

export default RENDERLABS
