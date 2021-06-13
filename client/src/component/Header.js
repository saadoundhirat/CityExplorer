import React from 'react'
import saad from '../image/saad.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            myImage:saad,
            title:"saadoun"
        }
    }
    changeimage =()=>{
        this.setState({
            title:"coding"
        })
    }
    render() {
        return (
            <div className="headcontainer">
                <div className="imgcontainer">
                <img src={this.state.myImage} title={this.state.title} alt="saadoun" onClick={this.changeimage}/>
                </div>
                <h1 className="header"> City Explorer</h1>
            </div>
        );
    }
}

export default Header;