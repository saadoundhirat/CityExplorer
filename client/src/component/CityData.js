import React, { Component } from 'react';
import {
    Container,
    Col,
    Row,
    Image,
    Alert
    } from 'react-bootstrap/'

class cityData extends Component {
    render() {
        return (
            <div>
                {/* city data */}

                {/* this.props.cityData this will return undefined */}
                {this.props.displayCityData &&
                <Container>
                    <h3>City Name:{this.props.cityData?.display_name} </h3>
                    <h4>City Lat:{this.props.cityData?.lat}</h4>
                    <h4>City Lon:{this.props.cityData?.lon}</h4>

                {/* map date */}
                        <Row>
                            <Col xs={6} md={4}>
                            <Image src={this.props.mapData} rounded />
                            </Col>
                        </Row>
          
                </Container>
                }


                {/* error massage */}
                {this.props.displayErrMsg && <Container >
                        <Alert  
                        variant={'danger'}>
                         We cant Handle Request Try Again please <br/>
                         <span> Note: Check THE URL</span>
                        </Alert>
                </Container>
                }
            </div>
        )
    }
}

export default cityData;
